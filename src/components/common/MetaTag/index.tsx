import { useSession } from "next-auth/react";
import { Helmet } from "react-helmet-async";

interface props {
  title?: string;
  description?: string;
  image?: string;
}

export default function MetaTag({ title, image, description }: props) {
  const { data: session, status } = useSession();

  return (
    <Helmet>
      <title>
        {`@${status === "authenticated" ? session?.user?.username : ""}`} Blog
      </title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
}
