import type { NextPage } from "next";
import Image from "next/image";

import React, { useState } from "react";

const ImagePreview: NextPage = () => {
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("" as string);

  // 파일 저장
  const saveFileImage = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  return (
    <div>
      <h1>이미지 미리보기</h1>
      <table>
        <tbody>
          <tr>
            <th>이미지</th>
            <td>
              <div>
                {fileImage && (
                  <Image
                    alt="sample"
                    src={fileImage}
                    width={200}
                    height={200}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImagePreview;
