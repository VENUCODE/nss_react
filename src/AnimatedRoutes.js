import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import GalleryPage from "./pages/Gallery";
import ProfilePage from "./pages/Profile";
import { EventProvider } from "./contexts/useAddEvent";
import AddEvent from "./pages/Profile/addEvent";
import MemberManage from "./pages/Profile/addMember";
import AddBannerImages from "./pages/Profile/addBanner";
import Profile from "./pages/Profile/profile";
import NotFoundPage from "./pages/NotFound";
import EventsPage from "./pages/Events";
import MembersPage from "./pages/Members";
import ContactUsPage from "./pages/Contact";
import useUser from "./contexts/userContext";

import { AnimatePresence } from "framer-motion";
import AddUnits from "./pages/Profile/addUnits";
const AnimatedRoutes = () => {
  const { isAuthenticated } = useUser();
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
          <Route path="add-members" element={<MemberManage />} />
          <Route path="add-banner-images" element={<AddBannerImages />} />
          <Route path="add-units" element={<AddUnits />} />
          <Route index element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
