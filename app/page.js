import DynamicPage from "./[slug]/page";

export default async function Home() {
  return (
    <DynamicPage
      params={{
        slug: "home",
      }}
    />
  );
}