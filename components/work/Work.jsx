import  "./../../styles/sass/work.scss"
function Work() {
    return (
        <div className={'work'}>

            <div className={'container-fluid'}>
                <h1 className={'work__title container'}>How we work!</h1>
                <ul className={'work__wrapper'}>
                    <li className={'work__item first'}>
                        <img
                            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K'}/>
                        <div>
                            <p>Сontact</p>
                            <p className={'text'}>Send us your project request or project idea.</p>

                        </div>
                    </li>

                    <li className={'work__item'}>
                        <img
                            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K'}/>
                        <div>
                            <p>Сontact</p>
                            <p className={'text'}>Send us your project request or project idea.</p>
                        </div>
                    </li>


                    <li className={'work__item'}>
                        <img
                            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K'}/>
                        <div>
                            <p>Сontact</p>
                            <p className={'text'}>Send us your project request or project idea.</p>
                        </div>
                    </li>


                    <li className={'work__item'}>
                        <img
                            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K'}/>
                        <div>
                            <p>Сontact</p>
                            <p className={'text'}>Send us your project request or project idea.</p>
                        </div>
                    </li>


                    <li className={'work__item last'}>
                        <img
                            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MSA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iI0Y0RjdGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwLjM1NzggNDMuNTcxMkw0NC4wMzEyIDM5Ljg5NzhDNDUuMDQ1NyAzOC44ODMzIDQ1LjI5NzMgMzcuMzMzNCA0NC42NTU2IDM2LjA1MDFMNDQuNDQ3NSAzNS42MzM4QzQzLjgwNTggMzQuMzUwNSA0NC4wNTczIDMyLjgwMDYgNDUuMDcxOSAzMS43ODYxTDQ5LjYyNjYgMjcuMjMxNEM0OS45NTIgMjYuOTA1OSA1MC40Nzk2IDI2LjkwNTkgNTAuODA1MSAyNy4yMzE0QzUwLjg2ODQgMjcuMjk0NyA1MC45MjExIDI3LjM2NzggNTAuOTYxMiAyNy40NDhMNTIuODAxMSAzMS4xMjc5QzU0LjIwODcgMzMuOTQzMSA1My42NTcgMzcuMzQzMSA1MS40MzE0IDM5LjU2ODdMNDEuNDMzMyA0OS41NjY3QzM5LjAxMDggNTEuOTg5MyAzNS40Mjc0IDUyLjgzNTIgMzIuMTc3MiA1MS43NTE4TDI4LjE1MyA1MC40MTA0QzI3LjcxNjQgNTAuMjY0OSAyNy40ODA1IDQ5Ljc5MyAyNy42MjYgNDkuMzU2NEMyNy42NjY5IDQ5LjIzMzYgMjcuNzM1OCA0OS4xMjIxIDI3LjgyNzMgNDkuMDMwNkwzMi4yNDYxIDQ0LjYxMThDMzMuMjYwNiA0My41OTczIDM0LjgxMDUgNDMuMzQ1OCAzNi4wOTM4IDQzLjk4NzRMMzYuNTEwMSA0NC4xOTU2QzM3Ljc5MzQgNDQuODM3MiAzOS4zNDMzIDQ0LjU4NTcgNDAuMzU3OCA0My41NzEyWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K'}/>
                        <div>
                            <p>Сontact</p>
                            <p className={'text'}>Send us your project request or project idea.</p>
                        </div>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Work;