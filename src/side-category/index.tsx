import React, { ReactNode, useEffect, useState } from 'react';
import Section from './Section';
import styles from './index.less';
import Affix from '../affix';

interface Iprops {
  children: ReactNode;
  height: Number;
  width: Number;
  activeKey: string;
  onChange: (key: string | number) => void;
}

const SideCategory = (props: Iprops) => {
  const { children, activeKey } = props;
  const [renderChildren, setRenderChildren] = useState<ReactNode[] | null>();
  const [cateGory, setCategory] = useState<any[]>();
  useEffect(() => {
    const _cateGory: any[] = [];
    const renderChildren = React.Children.map(children, (child: any) => {
      if (child && child.type === Section) {
        const { tab, tabKey } = child.props;
        _cateGory.push({
          tab,
          tabKey,
        });
        return child;
      }
      return null;
    });
    setCategory(_cateGory);
    setRenderChildren(renderChildren);
  }, [children]);

  const changeTabKey = (key: string | number) => {
    props.onChange(key);
  };

  return (
    <div className={styles.categoryWrapper}>
      <div style={{ height: '' }}>{renderChildren}</div>
      <Affix>
        <ul className={styles.category}>
          {cateGory?.map((cate) => {
            return (
              <li
                key={cate.tabKey}
                className={styles.categoryItem}
                onClick={() => changeTabKey(cate.tabKey)}
              >
                <a
                  href={`#${cate.tabKey}`}
                  className={cate.tabKey === activeKey ? styles.active : null}
                >
                  <span className={styles.tab}>{cate.tab}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Affix>
    </div>
  );
};

SideCategory.Section = Section;

export default SideCategory;
