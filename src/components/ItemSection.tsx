import styled from '@emotion/styled';

import ListItem from './ListItem';

const _ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 0;
  width: 100%;
  margin-top: 60px;
  flex: 1;

  @media only screen and (orientation: landscape) and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export default function ItemSection() {
  return (
    <_ItemSection>
      <ListItem title="Rivian" subtitle="Basecamp (Supply Chain Portal) (Web, AWS)" />
      <ListItem
        title="Toyota Racing Development"
        subtitle="Data Aggregation/Race Prediction (Web, AWS)"
        link="https://aws.amazon.com/solutions/case-studies/toyota-racing-development/"
      />
      <ListItem title="Yapi" subtitle="Online Practice Portal, Internal Tools (Web)" link="https://yapiapp.com/" />
      <ListItem
        title="FitRecruiters (Personal Project)"
        subtitle="Jobs Website for Fitness Professionals (Web, Firebase)"
        link="/project/fit-recruiters"
      />
      <ListItem
        title="Hoist Powertools (Personal Project)"
        subtitle="Utilities and Resources for Powerlifters (iOS, Firebase)"
        link="/project/hoist-powertools"
      />
    </_ItemSection>
  );
}
