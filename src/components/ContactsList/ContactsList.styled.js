import styled from 'styled-components';
import { RiUser3Line, RiPhoneLine } from 'react-icons/ri';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 5px;

  span {
    margin-right: 30px;
  }
`;

export const UserIcon = styled(RiUser3Line)`
  margin-right: 10px;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  margin-right: 10px;
`;
