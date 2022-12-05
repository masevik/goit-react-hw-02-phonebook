import styled from 'styled-components';
import { RiUser3Line, RiPhoneLine } from 'react-icons/ri';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 5px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const UserIcon = styled(RiUser3Line)`
  margin-right: 10px;
`;

export const PhoneIcon = styled(RiPhoneLine)`
  margin-right: 10px;
`;
