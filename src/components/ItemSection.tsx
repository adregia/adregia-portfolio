import styled from '@emotion/styled';

import ListItem from './ListItem';

const _ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 60px;
  flex: 1;

  @media only screen and (orientation: portrait) and (max-width: 900px) {
    margin-left: 0;
    width: 100%;
    margin-top: 60px;
  }
`;

export default function ItemSection() {
  return (
    <_ItemSection>
      <ListItem title="Rivian" subtitle="Supply Chain Portal (Web, AWS)" />
      <ListItem
        title="Toyota Racing Development"
        subtitle="Data Aggregation/Race Prediction (Web, AWS)"
        link="https://aws.amazon.com/solutions/case-studies/toyota-racing-development/"
      />
      <ListItem title="Yapi" subtitle="Online Practice Portal, Internal Tools (Web)" link="https://yapiapp.com/" />
      <ListItem
        title="FitRecruiters (Personal Project)"
        subtitle="Jobs Website for Fitness Professionals (Web, Firebase)"
        link="/fit-recruiters"
      />
      <ListItem
        title="Hoist Powertools (Personal Project)"
        subtitle="Utilities and Resources for Powerlifters (iOS, Firebase)"
        link="/hoist-powertools"
      />
    </_ItemSection>
  );
}
