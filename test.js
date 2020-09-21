const db = require('./knexconfig');
const Hobbits = require('./dbhelper');

describe('hobbits model', () => {
    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('hobbits').truncate();
      });
  describe('add()', () => {
    
    it('should add the provided hobbits into the db', async () => {
      
      await Hobbits.add({ name: 'gaffer' });
      await Hobbits.add({ name: 'sam' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(2);
    });

    it('should not add this hobbit', async()=>{
        await Hobbits.add({horse: "bill"});

        const hobbits = await db('hobbits');
        expect(hobbits).toHaveLength(0)
    })
  });
  describe('remove()', ()=>{
      it('should remove hobbits', async()=>{
        await Hobbits.add({ name: 'gaffer' });
        await Hobbits.add({ name: 'sam' });

        await Hobbits.remove(1)
        const hobbits = await db('hobbits');
  
        expect(hobbits).toHaveLength(1);
      })

      it('should not remove hobbits', async()=>{
        await Hobbits.add({ name: 'gaffer' });
        await Hobbits.add({ name: 'sam' });

        await Hobbits.remove('sam')
        const hobbits = await db('hobbits');
  
        expect(hobbits).toHaveLength(2);
  })
})
})