import React from 'react'

// ANTD
import { Popover, Button } from 'antd'

// EDEN COMPONENTS
import CreationSocialsExtra from '@/components/Creation/CreationCard/CreationSocials/CreationSocialsExtra/CreationSocialsExtra'

// ICONS
import { FiMoreHorizontal } from 'react-icons/fi'

// STYLES
import CreationSocialsStyles from './CreationSocialsStyles'

const CreationSocials = () => {
  return (
    <CreationSocialsStyles>
      <div className="cr-socials-main">
        {/* <span className='cr-social like'>
          <Button className='btn' shape='circle' type='default'>
            <FaStar className='icon' />
            <Text className='text'>303</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social remix'>
          <Button className='btn' shape='circle' type='default'>
            <FaRetweet className='icon' />
            <Text className='text'>310</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social views'>
          <Button className='btn' shape='circle' type='default'>
            <AiFillEye className='icon' />
            <Text className='text'>310</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social bookmark'>
          <Button className='btn' shape='circle' type='default'>
            <BsFillBookmarkFill className='icon' />
            <Text className='text'>Save</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social share'>
          <Button className='btn' shape='circle' type='default'>
            <IoIosShareAlt className='icon' />
            <Text className='text'>Share</Text>
          </Button>
        </span> */}
      </div>

      <div className="cr-socials-extra">
        <Popover placement="topRight" content={<CreationSocialsExtra />}>
          <span className="cr-social share">
            <Button className="btn" shape="circle" type="default">
              <FiMoreHorizontal className="icon" />
            </Button>
          </span>
        </Popover>
      </div>
    </CreationSocialsStyles>
  )
}

export default CreationSocials
