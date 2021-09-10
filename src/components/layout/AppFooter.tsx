import React from 'react';

import {
  Layout,
} from 'antd';
// import logo from '../../assets/Group5757.svg';
// import footerimg from '../../assets/footerimg 1.svg';

const { Footer } = Layout;

const AppFooter = (
  // props:{account:boolean}
) => {
  // const {account} = props;
  return (
    <Footer style={{
      marginTop: '30px', marginLeft: '8.6%', marginRight: '8.6%', padding: 0
    }}>
      <div style={{ borderTopStyle: 'solid', borderTopColor: '#858DBD', borderTopWidth: '1px', paddingTop: '30px', width: '100%', display: 'flex', paddingBottom: '30px' }}>
        <div style={{ marginRight: '18px' }}>
          {/*<img src={logo} width={38}  alt=''/>*/}
        </div>
        <div style={{ color: '#858DBD' }}>
          <p>
            크립토아키파이낸스 서비스는 스마트컨트랙트와 상호작용을 위한 웹 인터페이스 입니다.<br />
            이미 어느정도의 검증 시간을 거친 디파이 대표 서비스들을 포크한 스마트컨트랙트이긴 하지만,<br />
            여전히 예상치 못한 위험이나 해킹 등에 노출될 수 있습니다.<br />
            크립토아키파이낸스 서비스를 사용하기 전에 충분한 사전 검토를 통해 해당 위험 요소를 인지하시기 바랍니다.<br />
            혹시라도 발생하는 금전적 피해에 대해 본 웹사이트 운영사를 포함한 그 누구도 손실을 보전해 줄 수 없습니다.
          </p>
          <p>
            ©2021 Created by Cripto Archi Finance&nbsp;&nbsp;&nbsp;&nbsp;<a style={{color:'#858DBD'}} href='mailto:info@criptoarchi.com'>info@criptoarchi.com</a>
          </p>
          <div>
            <a href={'https://www.alchemy.com/'}>
              {/*{account ? '1234' : '5678'}*/}
              {/*<img src={footerimg} width={240} alt=''/>*/}
            </a>
          </div>
        </div>
      </div>


      {/*<Footer style={{ textAlign: 'center' , color:'#858DBD'}}>©2021 Created by Cripto Archi Finance</Footer>*/}
    </Footer>
  );
};

export default AppFooter;
