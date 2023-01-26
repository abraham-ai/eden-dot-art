const MINIO_URL = 'https://minio.aws.abraham.fun'

export default function shaURL(creation) {
    if (creation?.sha) {
      return `${MINIO_URL}/${creation?.sha}`;
    } else if (creation.status === 'running' && creation?.intermediate_sha) {
    //   console.log('INTER-SHA!');
    //   console.log(creation);
      const inter_sha_length = creation.intermediate_sha.length;
      const inter_sha = `${MINIO_URL}/${creation.intermediate_sha[inter_sha_length - 1]}`;
    //   console.log(inter_sha);
      return inter_sha;
    }
  }
  