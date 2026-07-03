import { PortableText } from "@portabletext/react";

export default function RichTextSection({ data }) {

  return (
    <section className="default_page 5">
      <div className="wrapper">
          <PortableText
            value={data?.content}
          />
      </div>
    </section>
  )

}
