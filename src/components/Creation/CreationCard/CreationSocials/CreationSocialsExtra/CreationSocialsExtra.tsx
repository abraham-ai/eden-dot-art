import React from 'react'

// ROUTER
import { useRouter } from 'next/router'

// ANTD
import { Popover, Modal, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { IoIosShareAlt } from 'react-icons/io'

// STYLES
import styled from 'styled-components'

const CreationSocialsExtraStyles = styled.span`
  background: pink;
  border-radius: 25px;

  .cr-social {
    height: 40px;
    background: yellow;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .cr-social:first-child {
    margin-top: 0;
  }
  .cr-social .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default CreationSocialsExtra = () => {
  return (
    <CreationSocialsExtraStyles>
      <div className="cr-socials-main">
        <span className="cr-social like">
          <Button block className="btn" shape="round" type="default">
            <FaStar className="icon" />
            <Text className="text">303</Text>
          </Button>
        </span>

        <span className="cr-social remix">
          <Button className="btn" shape="round" type="default">
            <FaRetweet className="icon" />
            <Text className="text">310</Text>
          </Button>
        </span>

        {/* <span className='cr-social views'>
            <Button className='btn' shape='round' type='default'>
              <AiFillEye className='icon' />
              <Text className='text'>310</Text>
            </Button>
          </span> */}

        <span className="cr-social bookmark">
          <Button className="btn" shape="round" type="default">
            <BsFillBookmarkFill className="icon" />
            <Text className="text">Save</Text>
          </Button>
        </span>

        <span className="cr-social share">
          <Button className="btn" shape="round" type="default">
            <IoIosShareAlt className="icon" />
            <Text className="text">Share</Text>
          </Button>
        </span>
      </div>
    </CreationSocialsExtraStyles>
  )
}
