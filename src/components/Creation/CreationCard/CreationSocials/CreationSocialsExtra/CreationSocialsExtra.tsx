import React from 'react'

// ANTD
import { Typography, Button } from 'antd'
const { Text } = Typography

// ICONS
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { IoIosShareAlt } from 'react-icons/io'

// STYLES
import { CreationSocialsExtraStyles } from './CreationSocialsExtraStyles'

export default function CreationSocialsExtra() {
  return (
    <CreationSocialsExtraStyles>
      <div className="cr-socials-main">
        <span className="cr-social like">
          <Button block className="btn" shape="round" type="default">
            <FaStar className="icon" />
            <Text className="text">{'303'}</Text>
          </Button>
        </span>

        <span className="cr-social remix">
          <Button className="btn" shape="round" type="default">
            <FaRetweet className="icon" />
            <Text className="text">{'310'}</Text>
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
