import styled from 'styled-components';

export const Container = styled.section`
	margin-left: 5%;
	margin-right: 5%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 10;
	@media (max-width: 800px) {
		padding-top: 100px;
		flex-direction: column;
	}
`;


Container.Item = styled.div`
	width:100%;
	display: inline-block;
	margin-bottom: 50px;
	margin-left: 10px;
	@media (max-width: 800px) {
		width: 100%;
	}
`;

Container.Category = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 60px;
	line-height: 70px;
	display: flex;
	align-items: center;
	text-align: center;
	display: inline-block;
	padding: 25px;
	line-height: 1;
	border-radius: 4px;
	@media (max-width: 800px) {
		display: none;
		font-size: 18px;
		padding: 10px;
	}
`;

Container.Description = styled.p`
	line-height: 1.6em;
	text-align: justify;
	@media (max-width: 800px) {
		display: none;
	}
`;

Container.Title = styled.h2`
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 1.5;
	margin-top: 0;
	margin-bottom: 32px;
	@media (max-width: 800px) {
		font-size: 32px;
		text-align: center;
	}
`;

Container.Span = styled.span`
	color: var(--primary);
`;

export const ImageBanner = styled.img`
  margin-top: 200px;
  margin-left: 100px;
  max-width: 70%;
  @media (max-width: 800px) {
	
	margin-left: 45px;
	margin-top: auto;
  	
  	
	}
	
`;

export const BannerContainer = styled.section`
	height: 80vh;
	position: relative;
	color: #fff;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
	background-size: cover;
	background-position: center;
	@media (max-width: 800px) {
		height: auto;
		min-width: 50vh;
		min-height: 50vh;
	}
	&:after,
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		height: 20%;
	}
	&:before {
		top: 0;
		height: 100%;
		/* background: rgba(0, 0, 0, 0.5); */
	}
	&:after {
		bottom: 0;
		/* background: linear-gradient(0deg, #141414 0%, transparent 100%); */
	}
`;

export const WatchButton = styled.button`
	font-family: 'Roboto', sans-serif;
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	display: inline-block;
	border: 1px solid transparent;
	color: var(--black);
	background: var(--white);
	border-color: var(--black);
	transition: opacity 0.3s;
	display: none;
	margin: 0 auto;
	@media (max-width: 800px) {
		display: block;
	}
`;