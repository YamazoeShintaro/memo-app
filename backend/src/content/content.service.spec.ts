import { ContentService } from './content.service';
import { Repository } from 'typeorm';
import { Content } from '../entities/content.entity';

describe('ContentService', () => {
  let contentRepo: Repository<Content>;
  let service: ContentService;

  beforeEach(async () => {
    contentRepo = new Repository<Content>();
    service = new ContentService(contentRepo);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find', async () => {
    const result: Content[] = [];
    jest.spyOn(contentRepo, 'find').mockResolvedValue(result);
    expect(await service.findAll()).toBe(result);
  });
});
