import { Typography } from 'antd'
const { Text } = Typography

// COMPONENTS
import AppLogo from '@/components/AppLogo/AppLogo'
import Link from 'next/link'

// STYLES
import styled from 'styled-components'

const FooterWrapper = styled.section`
  .footer-info-section {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-link {
    padding: 8px 0;
    color: #0c163b;
  }
`

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <div
        style={{
          paddingBottom: 40,
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="footer-info-section">
          <AppLogo logo="eden" />
          <Text style={{ color: '#0c163b' }}>Learn</Text>

          <Link href="/create">
            <Text className="footer-link">Create</Text>
          </Link>
          <Link href="/collect">
            <Text className="footer-link">Collect</Text>
          </Link>
          <Link href="/docs">
            <Text className="footer-link">Documentation</Text>
          </Link>
        </div>

        <div className="footer-info-section">
          <Text className="footer-link">Company</Text>

          <Link href="/dev-about">
            <Text className="footer-link">About</Text>
          </Link>
          <Link href="/help">
            <Text className="footer-link">Help Center</Text>
          </Link>
          <Link href="/subscribe">
            <Text className="footer-link">Subscribe</Text>
          </Link>
        </div>

        <div className="footer-info-section">
          <Text className="footer-link">Connect</Text>
          <Link href="twitter.com">
            <Text className="footer-link">Twitter</Text>
          </Link>
          <Link href="instagram.com">
            <Text className="footer-link">Instagram</Text>
          </Link>
          <Link href="discord.com">
            <Text className="footer-link">Discord</Text>
          </Link>
        </div>

        <div className="footer-info-section">
          <Text className="footer-link">Privacy Policy</Text>
        </div>

        <div className="footer-info-section">
          <Text className="footer-link">Terms of Service</Text>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
