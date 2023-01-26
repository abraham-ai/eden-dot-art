import React, { useState } from 'react';

// NEXT
import Link from 'next/link'

// ROUTING
import { useRouter } from 'next/router'
import slug from 'slug';

// REDUX
import { useSelector, useDispatch, batch } from 'react-redux'
import { setFilter } from '@/redux/slices/filterSlice'
import { setSort } from '@/redux/slices/sortSlice'
import { setPageUpdate, resetPageCreation } from '@/redux/slices/creationsSlice'

// HOOKS
import { useWindowDimensions } from '@/hooks';

// CSS
import styled from 'styled-components';

// UI
import { Radio, Typography, Dropdown, Menu, Space, Button } from 'antd';
const Item = Menu.Item;
const { Text } = Typography;

// ICONS
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const FeedButtonStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  button.ant-btn {
    min-height: 50px;
    width: 100px;
    font-size: 16px;
    font-weight: 600;
  }
  .filter-menu-mobi {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .ant-menu-item {
    padding: 0 20px !important;
    margin: 0;
  }
  .ant-radio-group {
    height: 50px;
    display: flex;
  }
  .ant-radio-button-wrapper {
    width: 100px;
    height: 50px;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
  }
  .ant-radio-button-wrapper span:first-child {
  }
  .ant-radio-button-wrapper span:nth-child(2) {
    font-weight: 600;
    font-size: 16px;
  }
  .feed-button
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-radius: 30px;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
`;

function FilterMobi() {
  const [route, setRoute] = useState();
  
  // routes
  const router = useRouter();
  const { pathname, query, asPath } = router

  // redux
  const dispatch = useDispatch()


  // slices
  const filter_by = useSelector(state => state.filter.value);
  const changeSort = evt => dispatch(setSort(evt));

  return (
    <Menu selectedKeys={[param2Id]} mode="horizontal" className="filter-menu-mobi">
      <Item key="new" onClick={() => changeSort('new')}>
        <Link
          onClick={() => {
            setRoute(`/creations/${filter_by}/new`);
          }}
          href={`/creations/${filter_by}/new`}
          exact
          activeClassName="active"
        >
          <span className="sort-text">
            <b>All</b>
          </span>
        </Link>
      </Item>
      <Item key="praises" onClick={() => changeSort('praises')}>
        <Link
          onClick={() => {
            setRoute(`/creations/${filter_by}/praises`);
          }}
          to={`/creations/${filter_by}/praises`}
          exact
          activeClassName="active"
        >
          <span className="sort-text">My Creations</span>
        </Link>
      </Item>
    </Menu>
  );
}

export default function FeedButton() {
  const history = useHistory();

  const dispatch = useDispatch();
  const sort_by = useSelector(state => state.sort.value);
  const filter_by = useSelector(state => state.filter.value);
  const { width } = useWindowDimensions();

  let { filter_url, sort_url } = useParams();

  let params = useParams();
  // console.log(param1Id, param2Id);
  // console.log(params);

  const onChange = e => {
    const currentFilter = e.target.value;
    console.log({ currentFilter });
    console.log({ sort_by });

    batch(() => {
      dispatch(setPageUpdate('replace'));
      dispatch(resetPageCreation());
      dispatch(setFilter(currentFilter));
    });

    // change URL route filter onChange
    if (typeof currentFilter !== undefined) {
      history.push(`/creations/${slug(currentFilter)}/${slug(sort_by)}`);
    }
  };

  const defaultValue = filter_url === 'all' || filter_url === 'my' ? filter_url : null;
  const isAllChecked = filter_url === 'all' ? 'primary' : 'default';
  const isMyChecked = filter_url === 'my' ? true : false;

  // console.log({ isAllChecked });
  // console.log({ isMyChecked });

  const deviceWidthMobile = 640;

  return (
    <FeedButtonStyles id="filter">
      {width < deviceWidthMobile ? (
        <FilterMobi />
      ) : (
        <div className="feed-button">
          <Button value="all" shape="round" size="large" type={isAllChecked} onClick={e => onChange(e)}>
            All
          </Button>
        </div>
      )}
    </FeedButtonStyles>
  );
}

// defaultValue={defaultValue}
// name="radiogroup"
// optionType="button"
// onChange={e => onChange(e)}