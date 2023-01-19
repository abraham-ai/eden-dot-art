<Menu selectedKeys={[route]} mode="horizontal">
    <MenuItem className="menu-item" key="creations" onChange={changeFilter}>
        <Link
            onClick={() => {
                router.push('')
            }}
            to={``}
            exact
            activeClassName="active"
        >
            <span className="filter-text">
                <Text>Creations<Text>
                </span>
                </Link>
            </MenuItem>
            <MenuItem className="menu-item" key="stars" onChange={changeSort}>
                <Link onClick={handleClick}>
                    <span className="filter-text">
                        <Text>Stars</Text>
                    </span>
                </Link>
            </MenuItem>
            <MenuItem className="menu-item" key="recretions" onChange={changeSort}>
                <Link
                    onClick={() => {
                        setRoute(``)
                    }}
                    to={``}
                    exact
                    activeClassName="active"
                >
                    <span className="filter-text">
                        <Text>Recreations</Text>
                    </span>
                </Link>
            </MenuItem>
            <MenuItem
                className="menu-item"
                key="collections"
                onChange={changeFilter}
            >
                <Link
                    onClick={() => {
                        setRoute(``)
                    }}
                    to={``}
                    exact
                    activeClassName="active"
                >
                    <span className="filter-text">
                        <Text>Collections</Text>
                    </span>
                </Link>
            </MenuItem>
            <MenuItem className="menu-item" key="nfts" onChange={changeSort}>
                <Link
                    onClick={() => {
                        router.push('')
                    }}
                    to={``}
                    exact
                    activeClassName="active"
                >
                    <span className="filter-text">
                        <Typography>NFTs</Typography>
                    </span>
                </Link>
            </MenuItem>
            <MenuItem className="menu-item" key="collected" onChange={changeSort}>
                <Link
                    onClick={() => {
                        setRoute('')
                    }}
                    to={''}
                    exact
                    activeClassName="active"
                >
                    <span className="filter-text">
                        <Typography>Collected</Typography>
                    </span>
                </Link>
            </MenuItem>
        </Menu>