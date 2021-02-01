import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
position: absolute;
top: 0;
left: 0;
width: 100%;
min-height: 60vh;
background: url(${props => props.img? props.img: defaultImg}) center/cover no-repeat;
display: flex;
align-items: flex-end;
justify-content: center;
`;

export default StyledHero;