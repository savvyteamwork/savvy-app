import React, {Component} from 'react';
import {View} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';

const data = {
  planed: [null, {x: 'Tue', y: 20}, {x: 'Wed', y: 50}, {x: 'Fri', y: 40}],
  actual: [
    {x: 'Mon', y: 50},
    {x: 'Tue', y: 80},
    {x: 'Wed', y: 30},
    {x: 'Thu', y: 60},
    {x: 'Fri', y: 70},
    {x: 'Sat', y: 80},
    {x: 'Sun', y: 35},
  ],
};
const WeeklyReportChart = () => {
  return (
    <View>
      <VictoryChart width={350}>
        <VictoryAxis label="Days" />
        <VictoryAxis
          dependentAxis
          label="Hours"
          style={{
            axisLabel: {
              padding: 35,
            },
          }}
        />
        <VictoryGroup offset={20}>
          <VictoryBar
            data={data.actual}
            style={{
              data: {
                fill: `blue`,
              },
            }}
          />
          <VictoryBar
            data={data.planed}
            width={10}
            style={{
              data: {
                fill: `orange`,
              },
            }}
          />
        </VictoryGroup>
        <VictoryLegend
          // x={105} y={50}
          // title="Weekly Report"
          centerTitle
          orientation="horizontal"
          data={[
            {
              name: 'actual',
              symbol: {
                fill: `blue`,
              },
            },
            {
              name: 'planed',
              symbol: {
                fill: `orange`,
              },
            },
          ]}
        />
      </VictoryChart>
    </View>
  );
};
export default WeeklyReportChart;
