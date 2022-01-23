import React, { ReactNode, useEffect, useState } from 'react';
import Section from './ContentSection';
import styles from './index.less';
import Affix from '../affix';

interface Iprops {
  children: ReactNode;
  height: Number;
  width: Number;
  activeKey: string;
  sideTop?: number;
  sideWidth?: number;
  onChange: (key: string | number) => void;
}

const tabClassName = 'mouse-ui-tab';
let scrollListener = true;

function getElementTop(element: HTMLElement) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent as HTMLElement;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent as HTMLElement;
  }
  return actualTop;
}
const SideCategory = (props: Iprops) => {
  const { children, activeKey, sideTop, sideWidth } = props;
  const [renderChildren, setRenderChildren] = useState<ReactNode[] | null>();
  const [cateGory, setCategory] = useState<any[]>();
  const [titListOffsetTop, setTitListOffsetTop] = useState<any[]>();
  useEffect(() => {
    const _cateGory: any[] = [];
    const renderChildren = React.Children.map(children, (child: any, index) => {
      if (child && child.type === Section) {
        const { tab, tabKey } = child.props;
        _cateGory.push({
          tab,
          tabKey,
          ref: child,
        });
        return (
          <div id={tabKey} className={tabClassName}>
            {child}
          </div>
        );
      }
      return null;
    });
    setCategory(_cateGory);
    setRenderChildren(renderChildren);
  }, [children]);

  const onscroll = () => {
    if (!scrollListener) return;
    const scrollTop = document.documentElement.scrollTop;
    titListOffsetTop?.forEach((top, index) => {
      const nextOffsetTop = titListOffsetTop[index + 1];
      if (scrollTop > top && (scrollTop <= nextOffsetTop || !nextOffsetTop)) {
        props.onChange(cateGory?.[index]?.tabKey);
      }
    });
  };
  useEffect(() => {
    setTimeout(() => {
      const titleEles = document.getElementsByClassName(tabClassName);
      const _topList: React.SetStateAction<any[] | undefined> = [];
      Array.from(titleEles).forEach((titleEle) => {
        if (titleEle instanceof HTMLElement) {
          _topList.push(getElementTop(titleEle) - (sideTop || 0));
        }
      });
      setTitListOffsetTop(_topList);
    }, 16);
    window.addEventListener('scroll', onscroll);
    return () => window.removeEventListener('scroll', onscroll);
  }, [titListOffsetTop]);

  const changeTabKey = (key: string | number, pos?: number) => {
    props.onChange(key);
    pos && scrollTopTitlePos(pos);
  };
  const scrollTopTitlePos = (pos: number) => {
    scrollListener = false;
    window.scrollTo({
      top: pos,
    });
    const timer = setTimeout(() => {
      scrollListener = true;
      clearTimeout(timer);
    });
  };
  return (
    <div className={styles.categoryWrapper}>
      <div style={{ width: `calc(100% - ${sideWidth}px - 40px)` }}>
        {renderChildren}
      </div>
      <Affix offsetTop={sideTop}>
        <ul className={styles.category}>
          {cateGory?.map((cate, index) => {
            if (cate.tab && cate.tabKey)
              return (
                <li
                  key={cate.tabKey}
                  className={styles.categoryItem}
                  onClick={() =>
                    changeTabKey(cate.tabKey, titListOffsetTop?.[index])
                  }
                >
                  <a
                    className={cate.tabKey === activeKey ? styles.active : null}
                  >
                    <span className={styles.tab}>{cate.tab}</span>
                  </a>
                </li>
              );
            return null;
          })}
        </ul>
      </Affix>
    </div>
  );
};

SideCategory.Section = Section;

export default SideCategory;
