import  "./../../styles/sass/delever.scss"
function Delever() {
    return (
        <div className="delever">

            <div className="container">
                <h1 className="delever__title">
                    <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg=='} alt={''}/>
                    <br/>
                <span className={'delever__title__sub'}>
                    <img src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkxMzQgMTkuNzkxN0M4LjQ0MTkzIDE5Ljc5MTcgOS4zNzQ2NyAxOC44NTg5IDkuMzc0NjcgMTcuNzA4M0M5LjM3NDY3IDE2LjU1NzcgOC40NDE5MyAxNS42MjUgNy4yOTEzNCAxNS42MjVDNi4xNDA3NSAxNS42MjUgNS4yMDgwMSAxNi41NTc3IDUuMjA4MDEgMTcuNzA4M0M1LjIwODAxIDE4Ljg1ODkgNi4xNDA3NSAxOS43OTE3IDcuMjkxMzQgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjcwODMgMTkuNzkxN0MxOC44NTg5IDE5Ljc5MTcgMTkuNzkxNyAxOC44NTg5IDE5Ljc5MTcgMTcuNzA4M0MxOS43OTE3IDE2LjU1NzcgMTguODU4OSAxNS42MjUgMTcuNzA4MyAxNS42MjVDMTYuNTU3NyAxNS42MjUgMTUuNjI1IDE2LjU1NzcgMTUuNjI1IDE3LjcwODNDMTUuNjI1IDE4Ljg1ODkgMTYuNTU3NyAxOS43OTE3IDE3LjcwODMgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMjA4MDEgMTcuNzA4NUgzLjEyNDY3VjEzLjU0MThNMi4wODMwMSA1LjIwODVIMTMuNTQxM1YxNy43MDg1TTkuMzc0NjggMTcuNzA4NUgxNS42MjQ3TTE5Ljc5MTMgMTcuNzA4NUgyMS44NzQ3VjExLjQ1ODVNMjEuODc0NyAxMS40NTg1SDEzLjU0MTNNMjEuODc0NyAxMS40NTg1TDE4Ljc0OTcgNi4yNTAxNkgxMy41NDEzIiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjEyNSA5LjM3NUg3LjI5MTY3IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='} alt={'wer'}/>
                    <p>Delivery</p>
                </span>
                </h1>

                <div className="delever__wrapper">

                    <div className="delever__left">

                        <p className="delever__left__text">
                            Delever - Delivery service automation targeted at both consumers and restaurants.
                        </p>

                        <div className="delever__list">
                            <div className="delever__list__item">
                                <img width={'56'}
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzM5LjU5OCA0OSA0OSAzOS41OTggNDkgMjhDNDkgMTYuNDAyIDM5LjU5OCA3IDI4IDdDMTYuNDAyIDcgNyAxNi40MDIgNyAyOEM3IDM5LjU5OCAxNi40MDIgNDkgMjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDAwMzkgMjFINDcuNjAwNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQwMDM5IDM1SDQ3LjYwMDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuODMzMiA3QzIyLjkwMjMgMTMuMjk5MSAyMC44MTg0IDIwLjU3NSAyMC44MTg0IDI4QzIwLjgxODQgMzUuNDI1IDIyLjkwMjMgNDIuNzAwOSAyNi44MzMyIDQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjE2NyA3QzMzLjA5NzkgMTMuMjk5MSAzNS4xODE4IDIwLjU3NSAzNS4xODE4IDI4QzM1LjE4MTggMzUuNDI1IDMzLjA5NzkgNDIuNzAwOSAyOS4xNjcgNDkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                     alt="iOS"/>
                                <span>Website</span>
                            </div>
                            <div className="delever__list__item">
                                <img width={'56'}
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzM5LjU5OCA0OSA0OSAzOS41OTggNDkgMjhDNDkgMTYuNDAyIDM5LjU5OCA3IDI4IDdDMTYuNDAyIDcgNyAxNi40MDIgNyAyOEM3IDM5LjU5OCAxNi40MDIgNDkgMjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDAwMzkgMjFINDcuNjAwNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQwMDM5IDM1SDQ3LjYwMDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuODMzMiA3QzIyLjkwMjMgMTMuMjk5MSAyMC44MTg0IDIwLjU3NSAyMC44MTg0IDI4QzIwLjgxODQgMzUuNDI1IDIyLjkwMjMgNDIuNzAwOSAyNi44MzMyIDQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjE2NyA3QzMzLjA5NzkgMTMuMjk5MSAzNS4xODE4IDIwLjU3NSAzNS4xODE4IDI4QzM1LjE4MTggMzUuNDI1IDMzLjA5NzkgNDIuNzAwOSAyOS4xNjcgNDkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                     alt="Android"/>
                                <span>
                                    Admin panel
                                </span>
                            </div>
                            <div className="delever__list__item">
                                <img width={'56'}
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                     alt="Crossplatform"/>
                                <span>Crossplatform</span>
                            </div>
                            <div className="delever__list__item">
                                <img width={'56'}
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2LjY2NjcgOS4zMzMyNUg5LjMzMzMzQzguMDQ0NjcgOS4zMzMyNSA3IDEwLjM3NzkgNyAxMS42NjY2VjM0Ljk5OTlDNyAzNi4yODg2IDguMDQ0NjcgMzcuMzMzMyA5LjMzMzMzIDM3LjMzMzNINDYuNjY2N0M0Ny45NTUzIDM3LjMzMzMgNDkgMzYuMjg4NiA0OSAzNC45OTk5VjExLjY2NjZDNDkgMTAuMzc3OSA0Ny45NTUzIDkuMzMzMjUgNDYuNjY2NyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi4zMzMgNDYuNjY2N0gzOS42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDM3LjMzMzNWNDYuNjY2NiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNSAzNy4zMzMzVjQ2LjY2NjYiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                     alt="Crossplatform"/>
                                <span>Web design</span>
                            </div>
                            <div className="delever__list__item">
                                <img width={'56'}
                                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3LjMzMyA5LjMzMzI1SDE4LjY2NjNDMTcuMzc3NyA5LjMzMzI1IDE2LjMzMyAxMC4zNzc5IDE2LjMzMyAxMS42NjY2VjQ0LjMzMzNDMTYuMzMzIDQ1LjYyMTkgMTcuMzc3NyA0Ni42NjY2IDE4LjY2NjMgNDYuNjY2NkgzNy4zMzNDMzguNjIxNyA0Ni42NjY2IDM5LjY2NjMgNDUuNjIxOSAzOS42NjYzIDQ0LjMzMzNWMTEuNjY2NkMzOS42NjYzIDEwLjM3NzkgMzguNjIxNyA5LjMzMzI1IDM3LjMzMyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNS42NjcgMTEuNjY2N0gzMC4zMzM3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                     alt="Crossplatform"/>
                                <span>Mobile design
</span>
                            </div>

                        </div>


                    </div>
                    <div className="delever__right">

                        <img className="header__right__img"
                             src="https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delever;