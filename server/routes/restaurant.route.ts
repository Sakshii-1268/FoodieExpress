import express from "express";
import { createRestaurant, getRestaurant, getRestaurantOrders, getSingleRestaurant, searchRestaurant, updateOrderStatus, updateRestaurant } from "../controller/restaurant.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import upload from "../middlewares/multer";

const router = express.Router();

router.route("/").post(isAuthenticated, upload.single("imageFile"), createRestaurant);
router.route("/").get(isAuthenticated, getRestaurant);
router.route("/").put(isAuthenticated, upload.single("imageFile"), updateRestaurant);
router.route("/orders").get(isAuthenticated, getRestaurantOrders);
router.route("/orders/:orderId/status").put(isAuthenticated, updateOrderStatus);
router.route("/search/:searchText").get(isAuthenticated, searchRestaurant);
router.route("/:id").get(isAuthenticated, getSingleRestaurant);

export default router;
