import PropTypes from "prop-types";
import { Card, Grid, Text, Link } from "@nextui-org/react";

function MyCard({ number, title, content }) {
  return (
    <Card
      css={{
        p: "$6",
        mw: "400px",
        backgroundColor: "#140647",
        color: "white",
        boxShadow: "none",
        border: "1px solid #432e8f",
      }}
    >
      <Card.Header>
        <h1>{number}</h1>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text
              h4
              css={{
                lineHeight: "$xs",
                color: "white",
                backgroundColor: "#3a277e",
                width: "100%",
                textAlign: "left",
                padding: "1rem 1rem",
                borderRadius: "6px",
              }}
            >
              {title}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2", color: "white" }}>
        <Text css={{ color: "white", fontSize: "15px" }}>{content}</Text>
      </Card.Body>
      <Card.Footer>
        <Link icon color="primary" href="#">
          How it works.
        </Link>
      </Card.Footer>
    </Card>
  );
}

MyCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MyCard;
