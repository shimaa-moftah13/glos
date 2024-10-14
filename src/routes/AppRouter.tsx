import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
// components
import { LottieHandler, PageSuspenseFallback } from "@components/feedback";
// pages
const Home = lazy(() => import("@pages/Home"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Categories = lazy(() => import("@pages/Categories"));
const Cart = lazy(() => import("@pages/Cart"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Profile = lazy(() => import("@pages/Profile/Profile"));
// const CheckoutForm = lazy(() => import("@components/eCommerce/CheckoutForm"))
// import StripePayment from "@components/eCommerce/CheckoutForm/StripePayment";
import Error from "@pages/Error";
import ProtectedRoute from "@components/Auth/ProtectedRoute";
// import AddAddressForm from "@components/Profile/Address/AddAddressForm";
// import { CheckoutForm } from "@components/eCommerce";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/categories",
        element: (
          <PageSuspenseFallback>
            <Categories />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/categories/products/:prefix",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <PageSuspenseFallback>
            <AboutUs />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: 'profile',
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: 'profile/:activepage',
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      // {
      //   path: 'profile/addaddress',
      //   element: (
      //     <PageSuspenseFallback>
      //       <ProtectedRoute>
      //         <AddAddressForm />
      //       </ProtectedRoute>
      //     </PageSuspenseFallback>
      //   ),
      // },
      // {
      //   path: 'checkoutform',
      //   element: (
      //     <PageSuspenseFallback>
      //       <ProtectedRoute>
      //         <StripePayment/>
      //       </ProtectedRoute>
      //     </PageSuspenseFallback>
      //   ),
      // },
      
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
