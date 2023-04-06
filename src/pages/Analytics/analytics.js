import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";

function AnalyticsReport() {
  const data = {
    totalRevenue: 10000,
    totalOrders: 500,
    totalCustomers: 100,
    averageOrderValue: 20,
    salesByCategory: {
      doors: 30,
      windows: 50,
      railing: 20,
    },
    monthlySales: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Monthly Sales",
          data: [
            1200, 1900, 3000, 5000, 2000, 3000, 7000, 8000, 6000, 4000, 8000,
            10000,
          ],
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    },
    bestSellers: [
      {
        name: "Aluminum Door",
        sales: 200,
      },
      {
        name: "Aluminum Window",
        sales: 150,
      },
      {
        name: "Aluminum Railing",
        sales: 100,
      },
    ],
  };

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Analytics Report</h2>
        <Row className="mb-4">
          <Col md={3}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Total Revenue</Card.Title>
                <Card.Text>${data.totalRevenue}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Total Orders</Card.Title>
                <Card.Text>{data.totalOrders}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Total Customers</Card.Title>
                <Card.Text>{data.totalCustomers}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Average Order Value</Card.Title>
                <Card.Text>${data.averageOrderValue}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <h4>Sales by Category</h4>
            <ProgressBar
              now={data.salesByCategory.doors}
              label={`Doors (${data.salesByCategory.doors}%)`}
              className="mb-2"
            />
            <ProgressBar
              now={data.salesByCategory.windows}
              label={`Windows (${data.salesByCategory.windows}%)`}
              className="mb-2"
            />
            <ProgressBar
              now={data.salesByCategory.railing}
              label={`Railing (${data.salesByCategory.railing}%)`}
              className="mb-2"
            />
          </Col>
          <Col md={6}>
            <h4>Monthly Sales</h4>
            <Line data={data.monthlySales} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Best Sellers</h4>
            <Bar
              data={{
                labels: data.bestSellers.map((item) => item.name),
                datasets: [
                  {
                    label: "Sales",
                    data: data.bestSellers.map((item) => item.sales),
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnalyticsReport;
