import React from 'react'
import styled from 'styled-components'

const NukeCard = styled.div`
	border-radius: 8px;
	background-color: ${props => props.theme.cardBackgroundColor};
	box-shadow: 0 0px 10px -5px #949494;
	box-sizing: border-box;
`

const CardHeader = styled.div`
	font-weight: 700;
	color: #2eca7f;
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