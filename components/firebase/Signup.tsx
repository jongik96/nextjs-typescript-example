import React, { useReducer, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import styled from "styled-components";

const Container = styled.form`
  display: "flex";
  flexwrap: "wrap";
  width: 400;
`;

const SignupBtn = styled.button`
  flexgrow: 1;
`;

const Header = styled.div`
  textalign: "center";
  background: "#212121";
`;

const Card = styled.div``;

//state(상태) 설정
type State = {
  email: string;
  password: string;
  passwordconfirm: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  email: "",
  password: "",
  passwordconfirm: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setPasswordConfirm"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "signupSuccess"; payload: string }
  | { type: "signupFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

// 상태관리를 변경하는 함수
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setPasswordConfirm":
      return {
        ...state,
        passwordconfirm: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "signupSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "signupFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // state.email/state.password/state.passwordconfirm을 체크하여 정상상태가 되면 버튼 활성화
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (
      state.email.trim() &&
      state.password.trim() &&
      state.passwordconfirm.trim()
    ) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.email, state.password, state.passwordconfirm]);

  // 회원가입 버튼을 클릭하면 성공실패를 판별 (abc@email.com, password값입력시 성공)
  async function handleSignup(event: any) {
    event.preventDefault();

    try {
      setError("");
      setSuccessMessage("");
      //회원가입 버튼 비활성화
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });

      await signup(state.email, state.passwordconfirm);
      dispatch({
        type: "signupSuccess",
        payload: "회원가입 성공",
      });

      // 회원가입 버튼 활성화
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
      setSuccessMessage("계정 생성 성공!");
    } catch (e: any) {
      console.log(e);
      // 오류메시지 표시
      switch (e.code) {
        case "auth/network-request-failed":
          setError("통신오류 또는 시간이 초과되었습니다.");
          break;
        case "auth/weak-password": // 현재 유효성 검사를 하지 않기 때문에 기본적으로 이코드까지 실행안됨
          setError("비밀번호가 짧습니다. 6자 이상 입력하세요.");
          break;
        case "auth/invalid-email": // 현재 유효성 검사를 하지 않기 때문에 기본적으로 이코드까지 실행안됨
          setError("이메일주소가 잘못되었습니다.");
          break;
        case "auth/email-already-in-use":
          setError(
            "이메일주소가 이미 사용중입니다. 로그안하거나 다른 이메일주소로 가입하십시오."
          );
          break;
        case "auth/user-disabled":
          setError("입력된 이메일주소로는 로그인하실 수 없습니다.");
          break;
        default:
          // 기타
          setError("회원가입에 실패했습니다.");
      }
      // 회원가입 버튼 활성화
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    }
  }
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleSignup();
    }
  };
  // 이메일주소 입력시 onChange이벤트가 발생하여 email의 State를 업데이트함
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  const handlePasswordConfirmChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    dispatch({
      type: "setPasswordConfirm",
      payload: event.target.value,
    });
  };

  return (
    <Container noValidate autoComplete="off">
      <Card>
        <Header title="회원가입" />
        <div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="이메일주소"
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
            <input
              id="password-confirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handlePasswordConfirmChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          회원가입이 되어 있다면, 로그인
        </div>
        <div>
          <SignupBtn onClick={handleSignup} disabled={state.isButtonDisabled}>
            회원가입
          </SignupBtn>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
