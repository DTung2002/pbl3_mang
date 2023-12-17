import React from 'react'
import { Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, Title
    , List, ListItem, Right, ContactItem, Payment, App, Center2, Right2 } from './style'
  import {
    FacebookOutlined ,
    YoutubeOutlined,
    InstagramOutlined,
    MailOutlined ,
    PhoneOutlined,
    TwitterOutlined,
  } from "@ant-design/icons";

const Footer = () => {
  return (
    
        <div style={{paddingTop: '0px', borderTop: '3px solid #ee4d2d', justifyContent: 'center',width: '1270px'}}>
            <Container>
            <Left>
            <Logo>SHOP - NỀN TẢNG MUA SẮM TRỰC TUYẾN UY TÍN</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            
            </Left>
            <Center>
            <Title>Hỗ trợ khách hàng</Title>
            <List>
                <ListItem>Các câu hỏi thường gặp</ListItem>
                <ListItem>Gửi yêu cầu hỗ trợ</ListItem>
                <ListItem>Hướng dẫn đặt hàng</ListItem>
                <ListItem>Phương thức vận chuyển</ListItem>
                <ListItem>Chính sách đổi trả</ListItem>
                <ListItem>Hướng dẫn trả góp</ListItem>
                <ListItem>Chính sách hàng nhập khẩu</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
            </Center>
            <Center2>
            <Title>Về Shop</Title>
            <List>
                <ListItem>Giới thiệu Shop</ListItem>
                <ListItem>Tuyển dụng</ListItem>
                <ListItem>Chính sách bảo mật thanh toán</ListItem>
                <ListItem>Chính sách bảo mật thông tin cá nhân</ListItem>
                <ListItem>Chính sách giải quyết khiếu nại</ListItem>
                <ListItem>Điều khoản sử dụng</ListItem>
                <ListItem>Gói hội viên VIP</ListItem>
                <ListItem>Bán hàng doanh nghiệp</ListItem>
                <ListItem>Tiếp thị liên kết cùng Shop</ListItem>
                <ListItem>Điều kiện vận chuyển</ListItem>
            </List>
            </Center2>
            <Right>
            <Title>Phương thức thanh toán</Title>
            {/* <ul style={{ display:'flex', listStyleType: 'none', padding: 0, margin: '0 0 1rem'}}>
                <li >
                <a>
                    <Payment  src="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815261-jd08_84586.png" />
                </a>
                </li>
                <li >
                <a>
                    <Payment  src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" />
                </a>
                </li>
                <li >
                <a>
                    <Payment  src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" />
                </a>
                </li>
                <li >
                <a>
                    <Payment  src=" https://lzd-img-global.slatic.net/g/tps/tfs/O1CN0174CwSq2NjastWFX1u_!!19999999999999-2-tps.png" />
                </a>
                </li>
            </ul>
            <ul style={{ display:'flex', listStyleType: 'none', padding: 0, margin: '0 0 1rem'}}>
            <li >
                <a>
                    <Payment  src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" />
                </a>
                </li>
                <li >
                <a>
                    <Payment  src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" />
                </a>
                </li>
                <li >
                <a>
                    <Payment  src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" />
                </a>
                </li>
            </ul> */}
            <Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdO73PVXzepRMyzJx_veThaupjRb4KW8eQAvEasvVx6f7njVLJ-mIUnn7VmV3PN8O-6hE&usqp=CAU'/>

            </Right>
            <Right2>
            <Title>Liên hệ với chúng tôi</Title>
            <ContactItem>
                <PhoneOutlined  style={{marginRight:"10px"}}/> +84 12 345 6789
            </ContactItem>
            <ContactItem>
                <MailOutlined  style={{marginRight:"10px"}} /> admin@gmail.com
            </ContactItem>
            <SocialContainer>
                <SocialIcon color="3B5999">
                <FacebookOutlined />
                </SocialIcon>
                <SocialIcon color="E4405F">
                <YoutubeOutlined />
                </SocialIcon>
                <SocialIcon color="E4405F">
                <InstagramOutlined />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                <TwitterOutlined />
                </SocialIcon>
            </SocialContainer>
                    
            <div>
                <div style={{marginTop: '12px', fontSize: '16px'}}>Tải ứng dụng trên điện thoại</div>
                <App src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png'/>
                <App src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png'/>
            </div>
            </Right2>
            </Container>
        </div>
    
  )
}

export default Footer
