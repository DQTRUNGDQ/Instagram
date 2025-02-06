import "../styles/globals.css";
// Mô tả kiểu dữ liệu của các props được truyền vào MyApp (Component & pageProps)
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
