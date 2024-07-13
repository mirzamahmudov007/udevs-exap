import  "./../../styles/sass/contact.scss"
function Contact() {
    return (
        <div className={'contact'}>

            <div className={'container'}>
                <h1 className={'contact__title'}>
                    Contact us
                </h1>
                <div className={'contact__wrapper'}>
                    <div className={'contact__left'}>
                        <div className="input-container ic1">
                            <input id="firstname" className="input" type="text" placeholder=""/>
                            <div className="cut"></div>
                            <label htmlFor="firstname" className="placeholder">First name</label>
                        </div>
                        <div className="input-container ic1">
                            <input id="firstname" className="input" type="text" placeholder=""/>
                            <div className="cut"></div>
                            <label htmlFor="firstname" className="placeholder">First name</label>
                        </div>


                        <button className={'navbars__link__btn mt-3'}>
                            Send
                        </button>
                    </div>
                    <div className={'contact__right'}>
                        <p>
                            <img
                                src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='}
                                alt={'wdw'}/>
                            <span>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</span>
                        </p>

                        <p>
                            <img
                                src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='}
                                alt={'wdw'}/>
                            <span>+998 33 66 00 999</span>
                        </p>
                        <p>
                            <img
                                src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='}
                                alt={'wdw'}/>
                            <span>Email iconazizbek.b@udevs.io</span>
                        </p>
                        <p>
                            <img
                                src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='}
                                alt={'wdw'}/>
                            <span>t.me/azizbekbakhodirov</span>
                        </p>

                        <iframe
                            style={{height:"250px"}}
                            className={'mw-100'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.691593293873!2d-6.260309184066149!3d53.34980557997853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9fbd3e6b11%3A0x1b6f2b345e5e9!2sGoogle!5e0!3m2!1suz!2s!4v1627468280148!5m2!1suz!2s"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;