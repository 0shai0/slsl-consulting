import { FaBars } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [clickedCategory, setClickedCategory] = useState('');
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // isMenuOpen를 true로 변경하기 위한 코드
    // menuboard가 보이도록 하기 때문에 true로 해줌

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 로고 클릭 시 메인 페이지로 이동하는 코드

    function logobtnclick(e) {

        window.location.href = "/"
        sessionStorage.clear();
        
    };

    // 제품 소개 클릭 시 Product로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function productbtnclick(e) {

        window.location.href = "/product"
        sessionStorage.clear();

    };

    // 발전량 예측 조회 클릭 시 MapSelect로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function predictInputClick(e) {

        window.location.href = "/mapselect"
        sessionStorage.clear();

    };

    // 발전 수익 및 설치비용 예측 조회 클릭 시 ValueInput로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function valueInputClick(e) {

        window.location.href = "/valueinput"

    }

    // FAQ 클릭 시 FAQ로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function faqbtnclick(e) {

        window.location.href = "/faq"
        sessionStorage.clear();

    };

    // 문의하기 클릭 시 InquiryInput로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function askbtnclick(e) {

        window.location.href = "/inquiryinput"
        sessionStorage.clear();

    };
    
    useEffect(() => {

        // setIsOpen을 true로 바꾸어 클래스 이름을 추가하기 위한 코드

        const visible = currentPath === '/product' || currentPath === '/mapselect' || currentPath === '/valueinput' || currentPath === '/faq' || currentPath === '/inquiryinput' || currentPath === '/valueresult';
        setIsOpen(visible);

        // setClickedCategory에 값을 집어 넣어 특정 카테고리 요소에 클래스를 이름을 추가하는 코드

        if (currentPath === '/product') {
            setClickedCategory('product');
        } else if (currentPath === '/mapselect') {
            setClickedCategory('predictInput');
        } else if (currentPath === '/valueinput' || currentPath === '/valueresult') {
            setClickedCategory('valueInput');
        } else if (currentPath === '/faq') {
            setClickedCategory('faq');
        } else if (currentPath === '/inquiryinput') {
            setClickedCategory('ask');
        }
    }, [window.location.pathname])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);
    

    return (
        <article className={`headerarticle ${isOpen ? '' : 'active'}`}>
            {/* 메인페이지 헤더 */}
            <section className={`headermain ${isOpen ? '' : 'active'}`}>
                <img src="images/slsllogoHeader.png" className={`logo2 ${isOpen ? '' : 'active'}`} onClick={logobtnclick} alt="logo" />
                
                <div id="cursor" className="menuicon" onClick={handleMenuToggle} >
                    <div className='faBars_container'>
                        {/* FaBars는 햄버거 요소 JSX 코드임. isOpen이 true면 클래스 이름에 active 추가 */}
                        <FaBars size={60} style={{marginBottom:"10px"}} color="white" className={`faBars ${isOpen ? 'active' : ''}`} />
                        {isMenuOpen && 
                            (<div className="menuboard">
                                <button className="btn" onClick={productbtnclick}>제품 소개 </button><br/>
                                <button className="btn" onClick={predictInputClick}>발전량 예측 조회 </button><br/>
                                <button className="btn" onClick={valueInputClick}>발전 수익 및<br/>설치비용 예측 조회</button><br/>
                                <button className="btn" onClick={faqbtnclick}>FAQ </button> <br/>
                                <button className="btn" onClick={askbtnclick}>문의하기</button>
                            </div>)}
                    </div>
                </div>
            </section>

            
            {/* 상세 페이지 헤더 */} 
                <StyledHeader className={!visible ? 'hide' : ''}>
                    <StyledSection>
                        <section className={`headerdetail ${isOpen ? 'active' : ''}`}>
                            <img src="images/slsllogo.png" className={`logo1 ${isOpen ? 'active' : ''}`} onClick={logobtnclick} alt="logo" />
                                
                            <div id='categoryBox'>
                                <div className={`category ${clickedCategory === 'product' ? 'clicked' : ''}`} onClick={productbtnclick}>제품 소개 </div><br/>
                                <div className={`category ${clickedCategory === 'predictInput' ? 'clicked' : ''}`} onClick={predictInputClick}>발전량 예측 조회 </div><br />
                                <div className={`category ${clickedCategory === 'valueInput' ? 'clicked' : ''}`} onClick={valueInputClick}>발전 수익 및 설치비용 예측 조회 </div><br />
                                <div className={`category ${clickedCategory === 'faq' ? 'clicked' : ''}`} onClick={faqbtnclick}>FAQ </div> <br />
                                <div className={`category ${clickedCategory === 'ask' ? 'clicked' : ''}`} onClick={askbtnclick}>문의하기</div>
                            </div>
                                
                        </section>
                    </StyledSection>
                </StyledHeader>
            
        </article>
    )
}

export default Header;

const StyledHeader = styled.article`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100px;
    transition: top 0.3s;
    z-index: 3;
    &.hide {
        top: -100px;
    }
`;

const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    
`;