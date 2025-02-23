import { Database } from "@blockpool-io/core-interfaces";
import { BlocksBusinessRepository } from "../../../../packages/core-database/src/repositories/blocks-business-repository";
import { DatabaseConnectionStub } from "../__fixtures__/database-connection-stub";
import { MockDatabaseModel } from "../__fixtures__/mock-database-model";

describe("Blocks Business Repository", () => {
    let blocksBusinessRepository: Database.IBlocksBusinessRepository;
    let databaseService: Database.IDatabaseService;

    beforeEach(() => {
        blocksBusinessRepository = new BlocksBusinessRepository(() => databaseService);
        databaseService = {
            connection: new DatabaseConnectionStub(),
        } as Database.IDatabaseService;
    });

    describe("search", () => {
        it("should invoke search on db repository", async () => {
            databaseService.connection.blocksRepository = {
                search: async params => params,
                getModel: () => new MockDatabaseModel(),
            } as any;

            jest.spyOn(databaseService.connection.blocksRepository, "search").mockImplementation(async () => ({
                rows: [],
                count: 0,
            }));

            await blocksBusinessRepository.search({
                limit: 50,
                offset: 20,
                id: 20,
            });

            expect(databaseService.connection.blocksRepository.search).toHaveBeenCalledWith(
                expect.objectContaining({
                    parameters: [
                        {
                            field: "id",
                            operator: expect.anything(),
                            value: 20,
                        },
                    ],
                    orderBy: [{ field: "height", direction: "desc" }],
                }),
            );
        });
    });

    describe("findByHeight", () => {
        it("should invoke findByHeight on db repository", async () => {
            databaseService.connection.blocksRepository = {
                findByHeight: async id => id,
            } as any;

            jest.spyOn(databaseService.connection.blocksRepository, "findByHeight").mockImplementation(
                async () => ({} as any),
            );

            await blocksBusinessRepository.findByHeight(1);

            expect(databaseService.connection.blocksRepository.findByHeight).toHaveBeenCalledWith(1);
        });
    });

    describe("findById", () => {
        it("should invoke findById on db repository", async () => {
            databaseService.connection.blocksRepository = {
                findById: async id => id,
            } as any;

            jest.spyOn(databaseService.connection.blocksRepository, "findById").mockImplementation(
                async () => ({} as any),
            );

            await blocksBusinessRepository.findById("some id");

            expect(databaseService.connection.blocksRepository.findById).toHaveBeenCalledWith("some id");
        });
    });

    describe("findAllByGenerator", () => {
        it("should search by generatorPublicKey", async () => {
            databaseService.connection.blocksRepository = {
                search: async params => params,
                getModel: () => new MockDatabaseModel(),
            } as any;

            jest.spyOn(databaseService.connection.blocksRepository, "search").mockImplementation(async () => ({
                rows: [],
                count: 0,
            }));

            await blocksBusinessRepository.findAllByGenerator("pubKey", { limit: 50, offset: 13 });

            expect(databaseService.connection.blocksRepository.search).toHaveBeenCalledWith(
                expect.objectContaining({
                    parameters: [
                        {
                            field: "generatorPublicKey",
                            operator: expect.anything(),
                            value: "pubKey",
                        },
                    ],
                    paginate: {
                        offset: 13,
                        limit: 50,
                    },
                }),
            );
        });
    });
});
