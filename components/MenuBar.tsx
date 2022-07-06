import Link from "next/link";

const MenuBar = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link> |
      </div>
      <div>
        <Link href="/Input">Input Example</Link> |
      </div>
      <div>
        <Link href="/ImageBox">Image Upload Example</Link> |
      </div>
      <div>
        <Link href="/Hook">Hook Example</Link>
      </div>
      <div>
        <Link href="/ApiTest">axios TypeScript</Link>
      </div>
    </div>
  );
};

export default MenuBar;
