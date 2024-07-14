import "./../../styles/sass/infrastructure.scss";
function Infrastructure() {
    return (
        <div className="infrastructure">
            <div className="container">
                <h1 className="infrastructure__title" data-aos="fade-down"> Optimization Infrastructure</h1>
                <div className="infrastructure__wrapper">
                    <div className="infrastructure__left">
                        <p className="infrastructure__left__text">
                            Our experienced professionals will help you optimize your infrastructure
                        </p>

                        <div className="infrastructure__list">
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTIxLjAwMDMgMTYuMzMzNEMxNC4wMDAzIDE2LjMzMzQgMTEuNjY3IDIzLjMzMzQgMTEuNjY3IDI5LjE2NjdDMTEuNjY3IDM2LjE2NjcgMTYuMzMzNyA0Ni42NjY3IDIxLjAwMDMgNDYuNjY2N0MyMy41MzkgNDYuNTU5NCAyNC45MTggNDUuNSAyOC4wMDAzIDQ1LjVDMzEuMDYxNyA0NS41IDMxLjUwMDMgNDYuNjY2NyAzNS4wMDAzIDQ2LjY2NjdDMzguNTAwMyA0Ni42NjY3IDQ0LjMzMzcgMzkuNjY2NyA0NC4zMzM3IDM1QzQ0LjI2ODMgMzQuOTc2NyAzOC41NjU3IDM0LjA1OTcgMzguNTAwMyAyOEMzOC40NTYgMjIuOTM2NyA0NC4xMzc3IDIxLjEwNzQgNDQuMzMzNyAyMUM0MS45NDY3IDE3LjUxODcgMzcuNDQ4IDE2LjQxOTcgMzYuMTY3IDE2LjMzMzRDMzIuODIzMyAxNi4wNzQ0IDI5LjU2MzcgMTguNjY2NyAyOC4wMDAzIDE4LjY2NjdDMjYuNDEzNyAxOC42NjY3IDIzLjU2NyAxNi4zMzM0IDIxLjAwMDMgMTYuMzMzNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjggOS4zMzM0MUMyOS4yMzc3IDkuMzMzNDEgMzAuNDI0NyA4Ljg0MTc1IDMxLjI5OTggNy45NjY1OEMzMi4xNzUgNy4wOTE0MSAzMi42NjY3IDUuOTA0NDMgMzIuNjY2NyA0LjY2Njc1QzMxLjQyOSA0LjY2Njc1IDMwLjI0MiA1LjE1ODQxIDI5LjM2NjggNi4wMzM1OEMyOC40OTE3IDYuOTA4NzUgMjggOC4wOTU3NCAyOCA5LjMzMzQxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                    alt="iOS" />
                                <span>CRM</span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTkuMzMzMDEgMjMuMzMzM1YzNy4zMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ2LjY2NyAyMy4zMzMzVjM3LjMzMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuMzMzIDIwLjk5OTlIMzkuNjY2M1YzOS42NjY2QzM5LjY2NjMgNDAuMjg1NCAzOS40MjA1IDQwLjg3ODkgMzguOTgyOSA0MS4zMTY1QzM4LjU0NTMgNDEuNzU0MSAzNy45NTE4IDQxLjk5OTkgMzcuMzMzIDQxLjk5OTlIMTguNjY2M0MxOC4wNDc1IDQxLjk5OTkgMTcuNDU0IDQxLjc1NDEgMTcuMDE2NCA0MS4zMTY1QzE2LjU3ODggNDAuODc4OSAxNi4zMzMgNDAuMjg1NCAxNi4zMzMgMzkuNjY2NlYyMC45OTk5Wk0xNi4zMzMgMjAuOTk5OUMxNi4zMzMgMTcuOTA1NyAxNy41NjIyIDE0LjkzODMgMTkuNzUwMSAxMi43NTAzQzIxLjkzOCAxMC41NjI0IDI0LjkwNTUgOS4zMzMyNSAyNy45OTk3IDkuMzMzMjVDMzEuMDkzOSA5LjMzMzI1IDM0LjA2MTMgMTAuNTYyNCAzNi4yNDkzIDEyLjc1MDNDMzguNDM3MiAxNC45MzgzIDM5LjY2NjMgMTcuOTA1NyAzOS42NjYzIDIwLjk5OTkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNjY3IDdMMjEuMDAwMyAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjMzMzMgN0wzNSAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1IDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                    alt="Android" />
                                <span>
                                    eLearning
                                </span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                    alt="Crossplatform" />
                                <span>E-Commerce</span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                    alt="Crossplatform" />
                                <span>POS</span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                    alt="Crossplatform" />
                                <span>Sms / Email
                                </span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                    alt="Crossplatform" />
                                <span>Warehouse</span>
                            </div>
                            <div className="infrastructure__list__item">
                                <img width={'56'}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                                    alt="Crossplatform" />
                                <span>Warehouse</span>
                            </div>
                        </div>


                    </div>
                    <div className="infrastructure__right">
                        <img data-aos="zoom-in" data-aos-delay="1" className="header__right__img"
                            src="https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure;