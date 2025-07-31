import { myStore } from "@/lib/redux/reduxStore";
import { Provider } from "react-redux";


export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Provider store={myStore}>
        {children}
        </Provider>


      </body>
    </html>
  );
}
