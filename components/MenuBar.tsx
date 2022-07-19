import Link from "next/link";

const MenuBar = () => {
  return (
    <div>
      <div>
        <Link href="/"> Home</Link> |<Link href="/Input"> Input Example</Link> |
        <Link href="/ImageBox"> Image Upload Example</Link> |
        <Link href="/Hook"> Hook Example</Link> |
        <Link href="/ApiTest"> axios TypeScript</Link> |
        <Link href="/DropdownMenu"> Dropdown Menu </Link> |
        <Link href="/CheckBox"> CheckBox </Link> |
        <Link href="/Modal"> Modal </Link> |
        <Link href="/MarkdownEditor"> MarkDown Editor </Link> |
        <Link href="/TabPage"> Tab Page </Link> |
        <Link href="/HideNavBar"> Hide NavBar </Link> |
        <Link href="/ScrollRestoration"> Scroll restoration </Link> |
        <Link href="/FireBaseAuth"> FireBase SignUp </Link> |
        <Link href="/FireBaseAuth2"> FireBase SignUp2 </Link> |
      </div>
    </div>
  );
};

export default MenuBar;
