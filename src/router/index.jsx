import React from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import Index from "../pages";
import ServicesLayout from "../pages/Services Layout/ServicesLayout";
import DrugId from "../pages/Services Layout/DrugId/DrugId";
import DrugInteractions from "../pages/Services Layout/DrugInteractions/DrugInteractions";
import FoodInteractions from "../pages/Services Layout/FoodInteractions/FoodInteractions";
import PageNotFound from "../pages/PageNotFound";
import Cases from "../pages/Home Layout/Cases/Cases";
import HomeLayout from "../pages/Home Layout/HomeLayout";
import CasesDetails from "../pages/Home Layout/Cases/CasesDetails";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<HomeLayout />}>
            <Route index element={<Index />} />
            <Route path="cases" element={<Cases />} />
            <Route path="cases/:caseId" element={<CasesDetails />} />
        </Route>


        {/* Services Layout */}
        <Route path="/services" element={<ServicesLayout />}>
            <Route path="drug_id" element={<DrugId />} />
            <Route path="food_interactions" element={<FoodInteractions />} />
            <Route path="podcast" element={<h1>Podcast</h1>} />
            <Route path="drug_interactions" element={<DrugInteractions />} />

        </Route>
        <Route path="/account" element={<Profile />} />


        {/* Not Found Route */}
        <Route path="*" element={<PageNotFound />} />

    </>
));

