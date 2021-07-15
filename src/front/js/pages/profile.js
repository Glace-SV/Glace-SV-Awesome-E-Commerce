import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/login.scss";
import { Context } from "../store/appContext";
import {
    Carousel,
    Item,
    Caption,
    Card,
    Img,
    Title,
    Text,
    ImgOverlay,
    Button,
    Form,
    Group,
    Label,
    Control,
    Check,
    Tab,
    Row,
    Col,
    Nav
} from "react-bootstrap";


export const Profile = () => {
    const { actions } = useContext(Context);
    const [user, setUser] = useState(null);


    useEffect(() => {
        const token = actions.getToken();
        if (!token) {
            history.push("/login");
        }

        user = actions.getUser();
        if (!user) {
            fetch("https://3001-teal-ox-gom7j0sl.ws-eu11.gitpod.io/api/profile"), {
                method: "GET",
                Headers: {
                    "content-type": "aplication/json",
                    Authoritation: "bearer " + token,
                },

            }
                .then(response => response.json())
                .then(responseJson => {
                    setUser(responseJson)
                });
        } [];

        if (user === null) {
            return "Loading profile..."
        }

        return (

            <div className="jumbotron">

                <h1 className="display-4">Profile</h1>

                <hr className="my-4" />
                {user ? <spam>{user.email}</spam>
                    : "loading..."}

            </div>

        )
    },
}