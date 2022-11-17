import React from 'react'
import styled from 'styled-components'

const NukeCard = styled.div`
	border-radius: 8px;
	background-color: ${props => props.theme.cardBackgroundColor};
	box-shadow: ${props => props.theme.cardBoxShadow};
	color: ${props => props.theme.textColorPrimary};
	box-sizing: border-box;
`

const CardHeader = styled.div`
	font-weight: 700;
	color: ${props => props.theme.textColorSecondary};
	padding: 15px;
	border-bottom: 1px solid ${props => props.theme.cardHeaderBorderColor};
`

interface CardProps {
	className?: string
	children?:React.ReactNode
}

const Card = ({
	className,
	children
}:CardProps) => {
  return (
    <NukeCard className={className}>
		{children}
	</NukeCard>
  )
}

Card.Header = CardHeader;

export default Card