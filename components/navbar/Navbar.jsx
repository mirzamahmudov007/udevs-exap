import Link from "next/link";
import "./../../styles/sass/navbar.scss"
import { useState } from 'react';

const Navbar = () => {
    const  [active , setActive] = useState(false);

    function toggle(e) {
        e.preventDefault();
        const mobileMenu = document.getElementById("mobile");
        if (!active) {
            mobileMenu.style.transform = "translateX(0%)";
            setActive(true);
        } else {
            mobileMenu.style.transform = "translateX(-100%)";
            setActive(false);
        }
    }


    function closeMenu() {
        document.getElementById('mobile').style.transform = 'translateX(-100%)';
        setActive(false);
    }
    return (
       <nav className="navbars">
       <div className="container">
       <div className="navbars__wrapper">
                    <div className="navbars__logo">
                        <img width={'100'} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="logo"/>
                    </div>
                    <div>
                        <ul className="navbars__link">
                            <li className="navbars__link__item">
                                <a href="#">Direction</a>
                            </li>
                            <li className="navbars__link__item">
                                <a href="#">Command</a>
                            </li>
                            <li className="navbars__link__item navbars__link__dropdown">
                                <a href="#">Services
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" alt="Angle Down" />
                                </a>

                                <ul className="services_box">
                                    <li>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU3MTQgMTUuODU3MUMxOS45Nzk3IDE1Ljg1NzEgMTkuNSAxNi4zMzY4IDE5LjUgMTYuOTI4NVYzMS4wNzE0QzE5LjUgMzEuNjYzMSAxOS45Nzk3IDMyLjE0MjggMjAuNTcxNCAzMi4xNDI4SDI3LjQyODZDMjguMDIwMyAzMi4xNDI4IDI4LjUgMzEuNjYzMSAyOC41IDMxLjA3MTRWMTYuOTI4NUMyOC41IDE2LjMzNjggMjguMDIwMyAxNS44NTcxIDI3LjQyODYgMTUuODU3MUgyMC41NzE0WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU3MSAxNC41NzE1SDI3LjQyODJDMjguNzMgMTQuNTcxNSAyOS43ODUzIDE1LjYyNjkgMjkuNzg1MyAxNi45Mjg3VjMxLjA3MTVDMjkuNzg1MyAzMi4zNzMzIDI4LjczIDMzLjQyODcgMjcuNDI4MiAzMy40Mjg3SDIwLjU3MUMxOS4yNjkyIDMzLjQyODcgMTguMjEzOSAzMi4zNzMzIDE4LjIxMzkgMzEuMDcxNVYxNi45Mjg3QzE4LjIxMzkgMTUuNjI2OSAxOS4yNjkyIDE0LjU3MTUgMjAuNTcxIDE0LjU3MTVaTTIwLjU3MSAxNS44NTcyQzE5Ljk3OTMgMTUuODU3MiAxOS40OTk2IDE2LjMzNjkgMTkuNDk5NiAxNi45Mjg3VjMxLjA3MTVDMTkuNDk5NiAzMS42NjMzIDE5Ljk3OTMgMzIuMTQzIDIwLjU3MSAzMi4xNDNIMjcuNDI4MUMyOC4wMTk5IDMyLjE0MyAyOC40OTk2IDMxLjY2MzMgMjguNDk5NiAzMS4wNzE1VjE2LjkyODdDMjguNDk5NiAxNi4zMzY5IDI4LjAxOTkgMTUuODU3MiAyNy40MjgxIDE1Ljg1NzJIMjYuNDY4MlYxNi4wMDU3QzI2LjQ2ODIgMTYuNTU4IDI2LjAyMDUgMTcuMDA1NyAyNS40NjgyIDE3LjAwNTdIMjIuNTMxQzIxLjk3ODggMTcuMDA1NyAyMS41MzEgMTYuNTU4IDIxLjUzMSAxNi4wMDU3VjE1Ljg1NzJIMjAuNTcxWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K" alt="img1"/>
                                        Development of mobile applications
                                    </li>
                                    <li>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS40Mjg3IDE4QzE1LjQyODcgMTkuODkzNiAxNi45NjM3IDIxLjQyODYgMTguODU3MyAyMS40Mjg2QzIwLjc1MDggMjEuNDI4NiAyMi4yODU5IDE5Ljg5MzYgMjIuMjg1OSAxOEMyMi4yODU5IDE2LjEwNjUgMjAuNzUwOCAxNC41NzE1IDE4Ljg1NzMgMTQuNTcxNUMxNi45NjM3IDE0LjU3MTUgMTUuNDI4NyAxNi4xMDY1IDE1LjQyODcgMThaTTIwLjU3MTcgMThDMjAuNTcxNyAxOC45NDY4IDE5LjgwNDEgMTkuNzE0MyAxOC44NTc0IDE5LjcxNDNDMTcuOTEwNiAxOS43MTQzIDE3LjE0MzEgMTguOTQ2OCAxNy4xNDMxIDE4QzE3LjE0MzEgMTcuMDUzMyAxNy45MTA2IDE2LjI4NTggMTguODU3NCAxNi4yODU4QzE5LjgwNDEgMTYuMjg1OCAyMC41NzE3IDE3LjA1MzMgMjAuNTcxNyAxOFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjU3MDQgMjIuMjg1N1YyNEgyMS40Mjc2QzIwLjgwMzEgMjQgMjAuMjE3NiAyMy44MzMgMTkuNzEzMyAyMy41NDEzVjI4LjI4NTdDMTkuNzEzMyAyOS4yMzI1IDIwLjQ4MDggMzAgMjEuNDI3NiAzMEgyNi41NzA0VjMxLjcxNDNIMjEuNDI3NkMxOS41MzQgMzEuNzE0MyAxNy45OTkgMzAuMTc5MyAxNy45OTkgMjguMjg1N1YyMC41NzE0VjIwLjE0MjlWMTkuNzE0M0gxOS43MTMzVjIwLjE0MjlWMjAuNTcxNEMxOS43MTMzIDIxLjUxODIgMjAuNDgwOCAyMi4yODU3IDIxLjQyNzYgMjIuMjg1N0gyNi41NzA0WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1LjcxMzkgMzAuODU3MkMyNS43MTM5IDMyLjc1MDcgMjcuMjQ4OSAzNC4yODU3IDI5LjE0MjQgMzQuMjg1N0MzMS4wMzYgMzQuMjg1NyAzMi41NzEgMzIuNzUwNyAzMi41NzEgMzAuODU3MkMzMi41NzEgMjguOTYzNiAzMS4wMzYgMjcuNDI4NiAyOS4xNDI0IDI3LjQyODZDMjcuMjQ4OSAyNy40Mjg2IDI1LjcxMzkgMjguOTYzNiAyNS43MTM5IDMwLjg1NzJaTTMwLjg1NjggMzAuODU3MkMzMC44NTY4IDMxLjgwMzkgMzAuMDg5MyAzMi41NzE0IDI5LjE0MjUgMzIuNTcxNEMyOC4xOTU4IDMyLjU3MTQgMjcuNDI4MiAzMS44MDM5IDI3LjQyODIgMzAuODU3MkMyNy40MjgyIDI5LjkxMDQgMjguMTk1OCAyOS4xNDI5IDI5LjE0MjUgMjkuMTQyOUMzMC4wODkzIDI5LjE0MjkgMzAuODU2OCAyOS45MTA0IDMwLjg1NjggMzAuODU3MloiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS43MTM5IDIzLjE0MjlDMjUuNzEzOSAyNS4wMzY0IDI3LjI0ODkgMjYuNTcxNCAyOS4xNDI0IDI2LjU3MTRDMzEuMDM2IDI2LjU3MTQgMzIuNTcxIDI1LjAzNjQgMzIuNTcxIDIzLjE0MjlDMzIuNTcxIDIxLjI0OTMgMzEuMDM2IDE5LjcxNDMgMjkuMTQyNCAxOS43MTQzQzI3LjI0ODkgMTkuNzE0MyAyNS43MTM5IDIxLjI0OTMgMjUuNzEzOSAyMy4xNDI5Wk0zMC44NTY4IDIzLjE0MjlDMzAuODU2OCAyNC4wODk2IDMwLjA4OTMgMjQuODU3MSAyOS4xNDI1IDI0Ljg1NzFDMjguMTk1OCAyNC44NTcxIDI3LjQyODIgMjQuMDg5NiAyNy40MjgyIDIzLjE0MjlDMjcuNDI4MiAyMi4xOTYxIDI4LjE5NTggMjEuNDI4NiAyOS4xNDI1IDIxLjQyODZDMzAuMDg5MyAyMS40Mjg2IDMwLjg1NjggMjIuMTk2MSAzMC44NTY4IDIzLjE0MjlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="img1" />
                                        Development and implementation ERP systems
                                    </li>
                                    <li>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZD0iTTIzLjA2NTMgMjcuMzg1MUMyMy42MTIxIDI3LjgxOTggMjQuMzg2NiAyNy44MTk2IDI0LjkzMyAyNy4zODQ1TDMwLjMwOCAyMy4xMDU2QzMxLjAyNjUgMjIuNTM2NyAzMS4wMjc2IDIxLjQ0NjggMzAuMzEwNCAyMC44NzY0TDI0LjkzMzEgMTYuNTk5OEMyNC4zODY2IDE2LjE2NTEgMjMuNjEyMyAxNi4xNjUxIDIzLjA2NTggMTYuNTk5OEwxNy42ODMyIDIwLjg4MDVDMTYuOTY3OCAyMS40NDk1IDE2Ljk2NzQgMjIuNTM2IDE3LjY4MjMgMjMuMTA1NkwyMy4wNjUzIDI3LjM4NTFaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45MjQxIDI5LjYxMTVDMjQuMzc3NiAzMC4wNDYxIDIzLjYwMzUgMzAuMDQ2MiAyMy4wNTcgMjkuNjExN0wxOC4yODkyIDI1LjgyMTNDMTcuOTUwNCAyNS41NTE5IDE3LjQ1NjggMjUuNjExNSAxNy4xOTE4IDI1Ljk1MzdDMTYuOTI4MSAyNi4yOTQyIDE2Ljk5MTkgMjYuNzg0NCAxNy4zMzQxIDI3LjA0NjFMMjMuMDg2NyAzMS40NDZDMjMuNjI0NSAzMS44NTczIDI0LjM3MTIgMzEuODU3NCAyNC45MDkgMzEuNDQ2MUwzMC42NTg4IDI3LjA1MDFDMzEuMDAzOSAyNi43ODYzIDMxLjA2OCAyNi4yOTE5IDMwLjgwMTggMjUuOTQ4OEMzMC41MzQ2IDI1LjYwNDQgMzAuMDM3NiAyNS41NDQ3IDI5LjY5NjUgMjUuODE2TDI0LjkyNDEgMjkuNjExNVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==" alt="img1" />
                                        IT consulting
                                    </li>
                                    <li>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZD0iTTIzLjA2NTMgMjcuMzg1MUMyMy42MTIxIDI3LjgxOTggMjQuMzg2NiAyNy44MTk2IDI0LjkzMyAyNy4zODQ1TDMwLjMwOCAyMy4xMDU2QzMxLjAyNjUgMjIuNTM2NyAzMS4wMjc2IDIxLjQ0NjggMzAuMzEwNCAyMC44NzY0TDI0LjkzMzEgMTYuNTk5OEMyNC4zODY2IDE2LjE2NTEgMjMuNjEyMyAxNi4xNjUxIDIzLjA2NTggMTYuNTk5OEwxNy42ODMyIDIwLjg4MDVDMTYuOTY3OCAyMS40NDk1IDE2Ljk2NzQgMjIuNTM2IDE3LjY4MjMgMjMuMTA1NkwyMy4wNjUzIDI3LjM4NTFaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45MjQxIDI5LjYxMTVDMjQuMzc3NiAzMC4wNDYxIDIzLjYwMzUgMzAuMDQ2MiAyMy4wNTcgMjkuNjExN0wxOC4yODkyIDI1LjgyMTNDMTcuOTUwNCAyNS41NTE5IDE3LjQ1NjggMjUuNjExNSAxNy4xOTE4IDI1Ljk1MzdDMTYuOTI4MSAyNi4yOTQyIDE2Ljk5MTkgMjYuNzg0NCAxNy4zMzQxIDI3LjA0NjFMMjMuMDg2NyAzMS40NDZDMjMuNjI0NSAzMS44NTczIDI0LjM3MTIgMzEuODU3NCAyNC45MDkgMzEuNDQ2MUwzMC42NTg4IDI3LjA1MDFDMzEuMDAzOSAyNi43ODYzIDMxLjA2OCAyNi4yOTE5IDMwLjgwMTggMjUuOTQ4OEMzMC41MzQ2IDI1LjYwNDQgMzAuMDM3NiAyNS41NDQ3IDI5LjY5NjUgMjUuODE2TDI0LjkyNDEgMjkuNjExNVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==" alt="img1" />
                                        User interface, User experience design
                                    </li>

                                    <li>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMjkuNjc1OSAyMi4wNzE0SDI5Ljc4NTJDMzAuODUwMyAyMi4wNzE0IDMxLjcxMzcgMjIuOTM0OSAzMS43MTM3IDI0QzMxLjcxMzcgMjUuMDY1MSAzMC44NTAzIDI1LjkyODYgMjkuNzg1MiAyNS45Mjg2TDI5LjcyOTkgMjUuOTI4NkMyOS41NjMzIDI1LjkyOTIgMjkuNDEzMSAyNi4wMjg3IDI5LjM0NzUgMjYuMTgxOEMyOS4yNzU3IDI2LjM0NDQgMjkuMzA4OCAyNi41MjY5IDI5LjQyMzMgMjYuNjQ0TDI5LjQ2MTYgMjYuNjgyM0MyOS44MjM4IDI3LjA0NDEgMzAuMDI3MiAyNy41MzQ5IDMwLjAyNzIgMjguMDQ2OEMzMC4wMjcyIDI4LjU1ODYgMjkuODIzOCAyOS4wNDk1IDI5LjQ2MjEgMjkuNDEwN0MyOS4xMDA0IDI5Ljc3MjkgMjguNjA5NSAyOS45NzY0IDI4LjA5NzcgMjkuOTc2NEMyNy41ODU4IDI5Ljk3NjQgMjcuMDk0OSAyOS43NzI5IDI2LjczMzQgMjkuNDExTDI2LjY5OTkgMjkuMzc3NEMyNi41Nzc4IDI5LjI1OCAyNi4zOTUzIDI5LjIyNDkgMjYuMjMyNyAyOS4yOTY2QzI2LjA3OTYgMjkuMzYyMiAyNS45ODAxIDI5LjUxMjQgMjUuOTc5NCAyOS42NzY0VjI5Ljc4NTdDMjUuOTc5NCAzMC44NTA4IDI1LjExNiAzMS43MTQzIDI0LjA1MDkgMzEuNzE0M0MyMi45ODU4IDMxLjcxNDMgMjIuMTIyMyAzMC44NTA4IDIyLjEyMjMgMjkuNzg1N0MyMi4xMTg1IDI5LjU3MTQgMjIuMDEgMjkuNDE5NyAyMS44MTEzIDI5LjM0NTNDMjEuNjU1IDI5LjI3NjMgMjEuNDcyNSAyOS4zMDk0IDIxLjM1NTQgMjkuNDIzOEwyMS4zMTcxIDI5LjQ2MjJDMjAuOTU1NCAyOS44MjQzIDIwLjQ2NDUgMzAuMDI3OCAxOS45NTI3IDMwLjAyNzhDMTkuNDQwOCAzMC4wMjc4IDE4Ljk0OTkgMjkuODI0MyAxOC41ODg3IDI5LjQ2MjdDMTguMjI2NiAyOS4xMDA5IDE4LjAyMzEgMjguNjEwMSAxOC4wMjMxIDI4LjA5ODJDMTguMDIzMSAyNy41ODYzIDE4LjIyNjYgMjcuMDk1NSAxOC41ODg0IDI2LjczNEwxOC42MjIgMjYuNzAwNUMxOC43NDE1IDI2LjU3ODQgMTguNzc0NiAyNi4zOTU4IDE4LjcwMjkgMjYuMjMzMkMxOC42MzcyIDI2LjA4MDIgMTguNDg3IDI1Ljk4MDcgMTguMzIzIDI1Ljk4SDE4LjIxMzdDMTcuMTQ4NiAyNS45OCAxNi4yODUyIDI1LjExNjUgMTYuMjg1MiAyNC4wNTE0QzE2LjI4NTIgMjIuOTg2MyAxNy4xNDg2IDIyLjEyMjggMTguMjEzNyAyMi4xMjI4QzE4LjQyODEgMjIuMTE5IDE4LjU3OTcgMjIuMDEwNiAxOC42NTQyIDIxLjgxMTlDMTguNzIzMSAyMS42NTU2IDE4LjY5IDIxLjQ3MzEgMTguNTc1NiAyMS4zNTZMMTguNTM3MyAyMS4zMTc3QzE4LjE3NTEgMjAuOTU1OSAxNy45NzE2IDIwLjQ2NTEgMTcuOTcxNiAxOS45NTMyQzE3Ljk3MTYgMTkuNDQxMyAxOC4xNzUxIDE4Ljk1MDUgMTguNTM2OCAxOC41ODkyQzE4Ljg5ODUgMTguMjI3MSAxOS4zODk0IDE4LjAyMzYgMTkuOTAxMiAxOC4wMjM2QzIwLjQxMzEgMTguMDIzNiAyMC45MDQgMTguMjI3MSAyMS4yNjU0IDE4LjU4OUwyMS4yOTkgMTguNjIyNkMyMS40MjExIDE4Ljc0MiAyMS42MDM2IDE4Ljc3NTEgMjEuNzU5OSAxOC43MDYyTDIxLjg1MjIgMTguNjg2N0MyMS45ODU1IDE4LjYxNDUgMjIuMDcwMyAxOC40NzQ5IDIyLjA3MDkgMTguMzIzNlYxOC4yMTQzQzIyLjA3MDkgMTcuMTQ5MiAyMi45MzQzIDE2LjI4NTcgMjMuOTk5NCAxNi4yODU3QzI1LjA2NDYgMTYuMjg1NyAyNS45MjggMTcuMTQ5MiAyNS45MjggMTguMjE0M0wyNS45MjggMTguMjY5NkMyNS45Mjg3IDE4LjQzNjEgMjYuMDI4MiAxOC41ODY0IDI2LjE4NzYgMTguNjU0N0MyNi4zNDM5IDE4LjcyMzcgMjYuNTI2NCAxOC42OTA2IDI2LjY0MzQgMTguNTc2MUwyNi42ODE4IDE4LjUzNzhDMjcuMDQzNSAxOC4xNzU3IDI3LjUzNDQgMTcuOTcyMiAyOC4wNDYyIDE3Ljk3MjJDMjguNTU4MSAxNy45NzIyIDI5LjA0OSAxOC4xNzU3IDI5LjQxMDIgMTguNTM3M0MyOS43NzIzIDE4Ljg5OTEgMjkuOTc1OCAxOS4zODk5IDI5Ljk3NTggMTkuOTAxOEMyOS45NzU4IDIwLjQxMzYgMjkuNzcyMyAyMC45MDQ1IDI5LjQxMDQgMjEuMjY2TDI5LjM3NjkgMjEuMjk5NUMyOS4yNTc0IDIxLjQyMTYgMjkuMjI0MyAyMS42MDQyIDI5LjI5MzMgMjEuNzYwNEwyOS4zMTI3IDIxLjg1MjdDMjkuMzg1IDIxLjk4NjEgMjkuNTI0NiAyMi4wNzA4IDI5LjY3NTkgMjIuMDcxNFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy45OTkyIDI2LjU3MTRDMjUuNDE5MyAyNi41NzE0IDI2LjU3MDYgMjUuNDIwMiAyNi41NzA2IDI0QzI2LjU3MDYgMjIuNTc5OSAyNS40MTkzIDIxLjQyODYgMjMuOTk5MiAyMS40Mjg2QzIyLjU3OSAyMS40Mjg2IDIxLjQyNzcgMjIuNTc5OSAyMS40Mjc3IDI0QzIxLjQyNzcgMjUuNDIwMiAyMi41NzkgMjYuNTcxNCAyMy45OTkyIDI2LjU3MTRaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=" alt="img1" />
                                        Optimization IT consulting infrastructure
                                    </li>
                                
                                </ul>
                            </li>
                            <li className="navbars__link__item">
                                <a href="#">Tools</a>
                            </li>
                            <li className="navbars__link__item">
                                <a href="#">Clients</a>
                            </li>
                            <li className="navbars__link__item">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="navbars__link__item navbars__link__dropdown">
                                <a href="#">Language
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" alt="Angle Down" />
                                </a>

                                <ul className="box">
                               <li>
                                        <img width={'30'} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik00OTYuMDc3IDM0NS4wNDNDNTA2LjM2OCAzMTcuMzEgNTEyIDI4Ny4zMTQgNTEyIDI1NkM1MTIgMjI0LjY4NiA1MDYuMzY4IDE5NC42OSA0OTYuMDc3IDE2Ni45NTdIMTUuOTIzQzUuNjMzIDE5NC42OSAwIDIyNC42ODYgMCAyNTZDMCAyODcuMzE0IDUuNjMzIDMxNy4zMSAxNS45MjMgMzQ1LjA0M0wyNTYgMzY3LjMwNEw0OTYuMDc3IDM0NS4wNDNaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM2Ni4wNzEgNTEyIDQ1OS45MDYgNDQyLjUyOCA0OTYuMDc3IDM0NS4wNDNIMTUuOTIzMUM1Mi4wOTQxIDQ0Mi41MjggMTQ1LjkyOSA1MTIgMjU2IDUxMloiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg==" alt="d"/>
                                RU
                               </li>
                                    <li>
                                        <img width={'30'} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik00OTYuMDc3IDM0NS4wNDNDNTA2LjM2OCAzMTcuMzEgNTEyIDI4Ny4zMTQgNTEyIDI1NkM1MTIgMjI0LjY4NiA1MDYuMzY4IDE5NC42OSA0OTYuMDc3IDE2Ni45NTdIMTUuOTIzQzUuNjMzIDE5NC42OSAwIDIyNC42ODYgMCAyNTZDMCAyODcuMzE0IDUuNjMzIDMxNy4zMSAxNS45MjMgMzQ1LjA0M0wyNTYgMzY3LjMwNEw0OTYuMDc3IDM0NS4wNDNaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM2Ni4wNzEgNTEyIDQ1OS45MDYgNDQyLjUyOCA0OTYuMDc3IDM0NS4wNDNIMTUuOTIzMUM1Mi4wOTQxIDQ0Mi41MjggMTQ1LjkyOSA1MTIgMjU2IDUxMloiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg==" alt="d" />
                                        ENG
                                    </li>

                                </ul>
                            </li>
                            <li className="navbars__link__item">
                            <button className="navbars__link__btn">Contact</button>
                            </li>

                            <li className="navbars__link__hidden">
                            <button  onClick={(e) => toggle(e  )}>

                                    <svg width={'20'}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                    </svg>


                            </button>
                                <div id={'mobile'} className={'mobile'}>
                                    <div className={'mobile__navbar'}>
                                        <img width={'100'}
                                             src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                             alt="logo"/>
                                        <button onClick={(e) => toggle(e)}>
                                            <svg width={'25'} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
                                        </button>
                                    </div>
                                    <div className={'mobile__main'}>
                                        <ul className={'mobile__link'}>
                                            <li>
                                                    <Link onClick={closeMenu} href="#service">Services</Link>
                                            </li>
                                            <li><Link onClick={closeMenu} href="">Clients</Link></li>
                                            <li><Link onClick={closeMenu} href="#command">Command</Link></li>
                                        </ul>
                                        <ul className={'mobile__btns'}>
                                            <li>
                                                <button className={''}>Contact</button>
                                            </li>
                                            <li className={'icons'}>
                                                    <span className="0">
                                                        <svg width={'25'}
                                                    className="" focusable="false" viewBox="0 0 24 24"
                                                    aria-hidden="true" ><path
                                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                                                    </span>
                                                    <span
                                                    className="0"><svg width={'25'}
                                                    className="" focusable="false" viewBox="0 0 24 24"
                                                    aria-hidden="true"><path
                                                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                                                    </span>
                                                    <span
                                                    className="0"><svg width={'25'}
                                                    className="" focusable="false" viewBox="0 0 24 24"
                                                    aria-hidden="true"><path
                                                    d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
       </div>
       </div>
       </nav>
    );
}

export default Navbar;
