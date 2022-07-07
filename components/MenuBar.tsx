import Link from "next/link";

const MenuBar = () => {
  return (
    <div>
      <div>
        <Link href="/"> Home</Link> |<Link href="/Input"> Input Example</Link> |
        <Link href="/ImageBox"> Image Upload Example</Link> |
        <Link href="/Hook"> Hook Example</Link> |
        <Link href="/ApiTest"> axios TypeScript</Link> |
        <Link href="/Modal"> Modal </Link> |
        <Link href="/MarkdownEditor"> MarkDown Editor </Link> |
      </div>
    </div>
  );
};

export default MenuBar;
