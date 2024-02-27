import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.render("githubLogin");
});

router.get("/error", (req, res) => {
    res.render("error", { error: "No se pudo autenticar usando GitHub!" });
});

export default router;