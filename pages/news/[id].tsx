import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Topic = {
  subject: string;
  contents: string;
  update_ymdhi: string;
};

const NewsDetail = () => {
  const [topic, setTopic] = useState<Topic | null>();
  const { query } = useRouter();

  useEffect(() => {
    if (!query.id) {
      return;
    }

    fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/rcms-api/1/topic/detail/' + query.id,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopic(data?.details || null);
      });
  }, [query]);

  if (topic === null) {
    return <p>この記事は存在しません。</p>;
  }

  if (topic === undefined) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" component="h1">
        {topic.subject}
      </Typography>
      <Typography>
        Last updated on {format(new Date(topic.update_ymdhi), 'MM/dd/yyyy')}
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{
          __html: topic.contents,
        }}
      />
    </Box>
  );
};

export default NewsDetail;
