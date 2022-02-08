import styled from 'styled-components';
import Title from '../../../components/Title';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 180px;
  position: relative;
  padding-bottom: 240px;
`

export const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 20px;
  padding-bottom: 38px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  max-width: 422px;
`

export const CustomTitle = styled(Title)`
  padding-right: 375px;
`