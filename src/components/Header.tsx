import { Link } from "react-router-dom";

export function Header() {
  const navigation = [{ name: "Create Post", href: "/create" }];
  return (
    <header className="flex justify-between bg-slate-700 text-slate-50 px-10 py-4">
      <Link to="/">My Blog</Link>
      <nav>
        {navigation.map((item) => (
          <Link className="hover:underline" key={item.name} to={item.href}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
