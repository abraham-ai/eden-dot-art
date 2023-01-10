import React, { useState, useEffect } from 'react'

// ROUTING
import { useRouter } from 'next/router'
import Link from 'next/link'

// UI
import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'

const DashboardStyles = styled(Box)(
  () => `    
    .menu-item {
      font-size: 20px;
    }
  `,
)

export default function CreatorDashboard({
  onFilterChange,
  onSortChange,
  creatorAddress = 'test',
}) {
  const [route, setRoute] = useState()
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('new')

  const router = useRouter()

  useEffect(() => {
    setRoute(window.location.pathname)
  }, [setRoute])

  const [filterVisible, setFilterVisible] = useState(false)

  const changeFilter = evt => {
    onFilterChange(evt.target.value)
  }

  const changeSort = evt => {
    onSortChange(evt.target.value)
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <DashboardStyles>
      <Menu selectedKeys={[route]} mode="horizontal">
        <MenuItem className="menu-item" key="creations" onChange={changeFilter}>
          <Link
            onClick={() => {
              setRoute(``)
            }}
            to={``}
            exact
            activeClassName="active"
          >
            <span className="filter-text">
              <Typography>Creations</Typography>
            </span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item" key="stars" onChange={changeSort}>
          <Link onClick={handleClick}>
            <span className="filter-text">
              <Typography>Stars</Typography>
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
              <Typography>Recreations</Typography>
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
              <Typography>Collections</Typography>
            </span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item" key="nfts" onChange={changeSort}>
          <Link
            onClick={() => {
              setRoute(``)
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
              setRoute(``)
            }}
            to={``}
            exact
            activeClassName="active"
          >
            <span className="filter-text">
              <Typography>Collected</Typography>
            </span>
          </Link>
        </MenuItem>
      </Menu>
    </DashboardStyles>
  )
}
