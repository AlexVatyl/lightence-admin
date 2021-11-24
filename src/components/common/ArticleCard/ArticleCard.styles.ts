import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import theme from '../../../styles/theme';

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.07));
  background: ${(props) => props.theme.colors.main.mainBackground};
  border-radius: ${(props) => props.theme.border.radius};
`;

export const Image = styled(AntImage)`
  width: 100%;
  height: 100%;
  max-height: 22.375rem;

  @media only screen and ${theme.media.xs} {
    max-height: 11.625rem;
  }

  @media only screen and ${theme.media.md} {
    max-height: 12.5rem;
  }

  @media only screen and ${theme.media.xl} {
    max-height: 22.375rem;
  }
`;

export const Author = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.main};
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and ${theme.media.xl} {
    padding: 1rem;
  }

  @media only screen and ${theme.media.xxl} {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and ${theme.media.md} {
    margin-bottom: 0.625rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const DateTime = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.main};
  line-height: 1.25rem;
`;

export const Description = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;