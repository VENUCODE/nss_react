import "imagehover.css/css/imagehover.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontfamily.css";
import "./index.css";
import Profile from "./pages/Profile/profile";
import AddEvent from "./pages/Profile/addEvent";
import { EventProvider } from "./contexts/useAddEvent";
import useUser from "./contexts/userContext";
const HomePage = lazy(() => import("./pages/Home"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const EventsPage = lazy(() => import("./pages/Events"));
const MembersPage = lazy(() => import("./pages/Members"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const ContactUsPage = lazy(() => import("./pages/Contact"));
function App() {
  useEffect(() => {
    AOS.init();
  });
  const { isAuthenticated } = useUser();

  return (
    <>
      <div className="App">
        <Suspense fallback={<div>Loading</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactUsPage />} />

            <Route
              path="/user-profile"
              element={
                isAuthenticated ? <ProfilePage /> : <Navigate to="/" replace />
              }
            >
              <Route
                path="add-event"
                element={
                  <EventProvider>
                    <AddEvent />
                  </EventProvider>
                }
              />
              <Route path="add-members" element={<div>Add Member</div>} />
              <Route
                path="add-banner-images"
                element={<div>Add Banner Images</div>}
              />
              <Route path="add-units" element={<div>Add Units</div>} />
              <Route index element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
