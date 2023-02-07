import {
  Card,
  Typography,
  Divider,
  Button,
  Form
} from 'antd';
const { Text } = Typography

import Head from 'next/head';
// import SearchTwoToneIcon
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

// STYLES
import styled from 'styled-components'

const MainContent = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

function Status404() {
  return (
    <>
      <Head>
        <title>Status - 404</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <section>
            <div>
              <img alt="404" height={180} src="/static/images/status/404.svg" />
              <Text>
                The page you were looking for doesn't exist.
              </Text>
              <Text>
                It's on us, we moved the content to a different page. The search
                below should help!
              </Text>
            </div>
            <section>
              <Card style={{ textAlign: 'center', marginTop: 30, padding: 40 }}>
                <Form>
                  <input
                    type="text"
                    placeholder="Search terms here..."
                    // endAdornment={
                    //   <InputAdornment position="end">
                    //     <ButtonSearch variant="contained" size="small">
                    //       Search
                    //     </ButtonSearch>
                    //   </InputAdornment>
                    // }
                    // startAdornment={
                    //   <InputAdornment position="start">
                    //     <SearchTwoToneIcon />
                    //   </InputAdornment>
                    // }
                  />
                </Form>
                <Divider>OR</Divider>
                <Button href="/">
                  Go to homepage
                </Button>
              </Card>
            </section>
          </section>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Status404;

Status404.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
